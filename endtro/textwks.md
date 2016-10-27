title: END Training DH Intro
theme: senderle/cleaver-sharp
output: index.html
controls: true

--

# End Training 2016

## Digital Humanities Case Studies

--

>When you call something data, you imply that it exists in discrete, fungible units; that it is computationally tractable; that its meaningful qualities can be enumerated in a finite list; that someone else performing the same operations on the same data will come up with the same results.

>–Miriam Posner, "Humanities Data: A Necessary Contradiction"

--

### Google NGrams

* Collects word counts from every book Google has scanned
* Shows changes in word usage over time
* Makes mistakes when confronted with obsolete typography

--

### Melville, "Bartleby the Scrivener"

>The nature of my avocations for the last thirty years has brought me into more than ordinary contact with what would seem an interesting and somewhat singular set of men, of whom as yet nothing that I know of has ever been written:--I mean the law-copyists or scriveners.

--

### Melville, "Bartleby the Scrivener"

>Nippers, the second on my list, was a whiskered, sallow, and, upon the whole, rather piratical-looking young man of about five and twenty.  I always deemed him the victim of two evil powers--ambition and indigestion.  The ambition was evinced by a certain impatience of the duties of a mere copyist...

--

<iframe src="https://books.google.com/ngrams/graph?content=copyist%2Cscrivener&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Ccopyist%3B%2Cc0%3B.t1%3B%2Cscrivener%3B%2Cc0"></iframe>
--

### Why Metadata

--

* Above example: lots of information about one book; small amount of information about many books
* Metadata provides more information about more books
* Allows more subtle investigation

--

### Voyant Tools

* Analyzes customized corpora
* Comparse texts by word count
* Tracks trends over the length of a document
* Generates concordances

--
<iframe src="http://voyant-tools.org/?corpus=1454607657153.1200&stopList=stop.en.taporware.txt"></iframe>
--

### Topic Modeling

* Automatically identifies "topics" in a large collection of texts
* Requires no human input, apart from the number of topics to look for
* Topics can be ambiguous; metadata is required for interpretation
* No particular clusters are guaranteed to appear

--

<iframe src="http://dsl.richmond.edu/dispatch/"></iframe>

--

### Predictive Analysis

* Requires hand-tagged training data
* Uses training data as a "ground truth" for testing and validation
* Can be used to investigate predetermined research questions
* Produces clusteres directly related to pre-defined categories.

--

<iframe src="https://tedunderwood.com/2015/05/18/how-quickly-do-literary-standards-change/"></iframe>

--
