/* Turns a long document into a one-section-at-a-time reader.
 *
 * Progressive enhancement throughout. Without JavaScript the page is an
 * ordinary continuous CV, which is what a CV has to be when a script fails,
 * a reader saves the page, or a crawler reads it. Everything below only ever
 * adds to that.
 *
 * The index is built from the h2s at run time, so it cannot drift from the
 * document the way a hand-kept list would.
 */
(function () {
  'use strict';

  var root = document.querySelector('[data-section-viewer]');
  if (!root || !('IntersectionObserver' in window)) return;

  var prose = root.querySelector('.prose') || root;
  var heads = Array.prototype.slice.call(prose.querySelectorAll(':scope > h2[id]'));
  if (heads.length < 3) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------- build sections */

  var sections = heads.map(function (h) {
    var sec = document.createElement('section');
    sec.className = 'doc-sec';
    // The section takes the heading's id, so existing anchors keep working;
    // the heading gets a derived one for aria-labelledby.
    var id = h.id;
    h.id = id + '-h';
    sec.id = id;
    sec.setAttribute('aria-labelledby', h.id);

    var node = h.nextSibling;
    h.parentNode.insertBefore(sec, h);
    sec.appendChild(h);
    while (node && !(node.nodeType === 1 && node.tagName === 'H2')) {
      var next = node.nextSibling;
      sec.appendChild(node);
      node = next;
    }
    return sec;
  });

  function titleOf(sec) { return sec.querySelector('h2').textContent.trim(); }

  function countOf(sec) {
    return sec.querySelectorAll('li, dt, tbody tr').length;
  }

  /* ------------------------------------------------- fold the very long lists */

  var KEEP = 6;
  sections.forEach(function (sec) {
    sec.querySelectorAll('dl.cv-list, ol.cites, ul.cites').forEach(function (list) {
      var kids = Array.prototype.slice.call(list.children);
      var groups = [];
      if (list.tagName === 'DL') {
        var cur = null;
        kids.forEach(function (el) {
          if (el.tagName === 'DT') { cur = [el]; groups.push(cur); }
          else if (cur) { cur.push(el); }
        });
      } else {
        groups = kids.map(function (k) { return [k]; });
      }
      if (groups.length <= KEEP + 2) return;

      var tail = document.createElement(list.tagName.toLowerCase());
      tail.className = list.className + ' doc-tail';
      tail.hidden = true;
      groups.slice(KEEP).forEach(function (g) {
        g.forEach(function (el) { tail.appendChild(el); });
      });
      list.after(tail);

      var n = groups.length - KEEP;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'doc-more';
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Show ' + n + ' more';
      btn.addEventListener('click', function () {
        var opening = tail.hidden;
        tail.hidden = !opening;
        btn.setAttribute('aria-expanded', String(opening));
        btn.textContent = opening ? 'Show fewer' : 'Show ' + n + ' more';
      });
      tail.after(btn);
    });
  });

  /* ------------------------------------------------------------ build the frame */

  var layout = document.createElement('div');
  layout.className = 'doc-layout';

  var nav = document.createElement('nav');
  nav.className = 'doc-nav';
  nav.setAttribute('aria-label', 'Sections of this CV');

  var main = document.createElement('div');
  main.className = 'doc-main';

  sections[0].parentNode.insertBefore(layout, sections[0]);
  sections.forEach(function (s) { main.appendChild(s); });
  layout.appendChild(nav);
  layout.appendChild(main);

  var list = document.createElement('ol');
  list.className = 'doc-index';

  /* "Everything" restores the plain continuous document. It is the escape hatch
     for the browser find bar, which can only see the section on screen. */
  var allItem = document.createElement('li');
  allItem.innerHTML = '<a href="#" class="doc-all">Everything</a>';
  list.appendChild(allItem);

  sections.forEach(function (sec, i) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + sec.id;
    a.textContent = titleOf(sec);
    var n = countOf(sec);
    if (n) {
      var c = document.createElement('span');
      c.className = 'doc-ct';
      c.textContent = n;
      a.appendChild(c);
    }
    a.addEventListener('click', function (e) {
      e.preventDefault();
      show(i, true);
    });
    li.appendChild(a);
    list.appendChild(li);
  });

  var lbl = document.createElement('p');
  lbl.className = 'doc-lbl';
  lbl.textContent = 'Contents';
  nav.appendChild(lbl);
  nav.appendChild(list);

  var links = Array.prototype.slice.call(list.querySelectorAll('a')).slice(1);
  var allLink = list.querySelector('.doc-all');

  /* ------------------------------------------------------------------- pager */

  var pager = document.createElement('nav');
  pager.className = 'doc-pager';
  pager.setAttribute('aria-label', 'Previous and next section');
  pager.innerHTML =
    '<button type="button" class="doc-step" data-dir="-1">' +
      '<span class="doc-dir">Previous</span><span class="doc-to"></span></button>' +
    '<button type="button" class="doc-step" data-dir="1">' +
      '<span class="doc-dir">Next</span><span class="doc-to"></span></button>';
  main.appendChild(pager);

  var steps = Array.prototype.slice.call(pager.querySelectorAll('.doc-step'));
  steps.forEach(function (b) {
    b.addEventListener('click', function () {
      show(current + Number(b.dataset.dir), true);
    });
  });

  /* -------------------------------------------------------------- show / all */

  var current = 0;
  var showingAll = false;

  function paint() {
    links.forEach(function (a, n) {
      var on = !showingAll && n === current;
      a.classList.toggle('is-on', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    allLink.classList.toggle('is-on', showingAll);

    // keep the active chip in view on the narrow layout
    if (!showingAll && window.innerWidth <= 860) {
      var a = links[current];
      if (a && list.scrollWidth > list.clientWidth) {
        var r = a.getBoundingClientRect(), p = list.getBoundingClientRect();
        list.scrollBy({
          left: r.left - p.left - (p.width - r.width) / 2,
          behavior: reduce.matches ? 'auto' : 'smooth'
        });
      }
    }
  }

  function show(i, moveFocus) {
    if (i < 0 || i >= sections.length) return;
    showingAll = false;
    current = i;
    root.classList.add('is-solo');
    sections.forEach(function (s, n) { s.classList.toggle('is-live', n === i); });

    steps[0].disabled = i === 0;
    steps[1].disabled = i === sections.length - 1;
    steps[0].querySelector('.doc-to').textContent = i > 0 ? titleOf(sections[i - 1]) : '';
    steps[1].querySelector('.doc-to').textContent =
      i < sections.length - 1 ? titleOf(sections[i + 1]) : '';

    paint();

    if (moveFocus) {
      if (history.replaceState) {
        history.replaceState(null, '', '#' + sections[i].id);
      }
      var h = sections[i].querySelector('h2');
      h.setAttribute('tabindex', '-1');
      h.focus({ preventScroll: true });
      var top = layout.getBoundingClientRect().top + window.scrollY - headerGap();
      window.scrollTo({ top: Math.max(0, top), behavior: reduce.matches ? 'auto' : 'smooth' });
    }
  }

  function showAll() {
    showingAll = true;
    root.classList.remove('is-solo');
    sections.forEach(function (s) { s.classList.remove('is-live'); });
    paint();
    if (history.replaceState) history.replaceState(null, '', location.pathname);
  }

  allLink.addEventListener('click', function (e) { e.preventDefault(); showAll(); });

  function headerGap() {
    var h = document.querySelector('.site-header');
    return (h ? h.getBoundingClientRect().height : 0) + 16;
  }

  /* -------------------------------------------------------------- print, hash */

  // A closed section must not vanish from the printed page.
  var restore = null;
  window.addEventListener('beforeprint', function () {
    restore = { all: showingAll, i: current };
    root.classList.remove('is-solo');
    sections.forEach(function (s) { s.classList.remove('is-live'); });
    root.querySelectorAll('.doc-tail').forEach(function (t) { t.hidden = false; });
  });
  window.addEventListener('afterprint', function () {
    if (!restore) return;
    if (restore.all) showAll(); else show(restore.i, false);
    restore = null;
  });

  function fromHash() {
    var id = (location.hash || '').replace(/^#/, '');
    if (!id) return -1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === id) return i;
    }
    return -1;
  }

  window.addEventListener('hashchange', function () {
    var i = fromHash();
    if (i > -1) show(i, true);
  });

  var start = fromHash();
  show(start > -1 ? start : 0, start > -1);
})();
