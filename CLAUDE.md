# Working notes for this repository

## Writing

Faruq asked that writing here avoid the patterns catalogued at
[Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
This covers text on the site and replies written to him in chat. The notes below come from a PDF
of the page he supplied (revision of 25 Aug 2026); an earlier version of this file was written
from memory and got several things wrong.

Three caveats the page makes about itself, worth keeping:

- It is "descriptive, not prescriptive; it consists of observations, not rules."
- The vocabulary lists are "to be taken as literally as possible: a word being overused by AI
  does not imply that its synonyms are also overused."
- The listed signs are "only potential signs of a problem, not the problem itself."

### The underlying problem

The page's own diagnosis is more useful than any word list. LLM output regresses to the mean:
it drops specific, unusual facts, which are statistically rare, and replaces them with generic
positive description, which is statistically common. Its example is that "inventor of the first
train-coupling device" becomes "a revolutionary titan of industry" — simultaneously less
specific and more exaggerated.

So the first test on any sentence here is whether it names something only this person did. On
this site that means the endoscopy example, the 33.0% to 92.7% checklist figure, the survey of
curricular deans, the open-book policy he kept against his own stated theory. Those survive.
"A commitment to excellence in medical education" does not.

### Patterns, with the page's own words to watch

**Undue significance and legacy.** stands/serves as, is a testament/reminder, a
crucial/pivotal/vital/significant/key role/moment, underscores/highlights its
importance/significance, reflects broader, symbolizing its ongoing/enduring/lasting,
contributing to the, setting the stage for, marking/shaping the, represents/marks a shift, key
turning point, evolving landscape, focal point, indelible mark, deeply rooted.

**Promotional tone.** boasts a, vibrant, rich, profound, enhancing, showcasing, exemplifies,
commitment to, natural beauty, nestled, in the heart of, groundbreaking, renowned, featuring,
diverse array.

**Superficial analysis via participial tails.** A present participle clause bolted to the end of
a sentence: highlighting/underscoring/emphasizing…, ensuring…, reflecting/symbolizing…,
contributing to…, cultivating/fostering…, encompassing…, enhancing…, valuable insights,
align/resonate with.

**Vague attribution.** Industry reports, Observers have cited, Experts argue, Some critics
argue, several sources (when few are cited), "such as" before a list that is actually exhaustive.

**Copula replacement.** serves as / stands as / marks / functions as / operates as / represents
[a]; boasts / features / maintains / offers [a]. Prefer is, are, has.

**Abstracted connections.** in connection with, connected with/to, in association with,
associated with — where of, for, by, used in, or caused by would say it plainly.

**Negative parallelism.** "Not just X, but also Y."

**Rule of three** used as a reflex.

**The "Challenges" arc.** "Despite its…, X faces several challenges", "Despite these
challenges", a Challenges and Legacy or Future Outlook section, a closing paragraph that turns
vaguely optimistic.

**Section summaries** that restate what the section just said.

**Vocabulary by era.** The page tracks these as changing over time, which matters — the older
lists now read as dated rather than current.
2023 to mid-2024: Additionally, boasts, bolstered, crucial, delve, emphasizing, enduring,
garner, intricate/intricacies, interplay, key, landscape, meticulous/meticulously, pivotal,
underscore, tapestry, testament, valuable, vibrant.
Mid-2024 to mid-2025: align with, bolstered, crucial, emphasizing, enhance, enduring,
fostering, highlighting, pivotal, showcasing, underscore, vibrant.
Mid-2025 on: emphasizing, enhance, highlighting, showcasing.

**Formatting.** Overuse of boldface. Title Case In Headings. Emoji as formatting. Bulleted
lists where every item opens with a boldfaced lead-in followed by a colon.

**Chatbot correspondence left in the text.** I hope this helps, Of course!, Certainly!, You're
absolutely right!, Would you like…, let me know, here is a…

**Knowledge-cutoff disclaimers.** Up to my last training update, as of my last knowledge update,
while specific details are limited, not widely documented, based on available information.

### Two things I got wrong before, recorded so they are not repeated

**Em dashes are not in this page.** It discusses dashes only as stray list markers. The belief
that em dashes signal AI writing is popular but is not supported here. Use them where they are
right; do not hunt them.

**Curly quotation marks are listed**, because Wikipedia's house style wants straight ones. This
site is not Wikipedia and its type is set in a real typeface, where curly quotes and apostrophes
are correct typography. Keep them.

### What to do instead

Name who did what, with numbers and dates. Let a specific fact carry its own weight rather than
labelling it important. Prefer is, has, and made to serves as, features, and represents. Say "I
could not check" rather than hedging. Cut any sentence that would not be missed.

## The site

Jekyll on GitHub Pages at fpradhan.com, built from `main`. See `README.md` for structure,
editing, the type stack and the image slots.
