KEEP 213 hopes to bring pattern matching to Kotlin, which _almost_ already supports it through a
combination of
its `when {}` clauses, smart casts, and destructuring. The proposal takes that a step beyond and
introduces nested patterns and guards.


You can find the original [here](https://github.com/Kotlin/KEEP/pull/213). While the Kotlin team have decided they will not
be implementing the pattern matching as specified in the proposal, they are still considering pattern matching.
The discussion continues to this day 
[here](https://youtrack.jetbrains.com/issue/KT-186/Support-pattern-matching-with-complex-patterns).


Overall, the 'flavour' of pattern matching the KEEP suggests is similar to Haskell's (with chained patters
and potentially several guards in each pattern) but with the absence of as-patters and enforcing
exhaustive matches.

```kotlin
sealed class Download
data class App(val name: String, val developer: Person) : Download()
data class Movie(val title: String, val director: Person) : Download()
val download: Download = // ...

// Without pattern matching:
val result = when(download) {
    is App -> {
        val (name, dev) = download
        when(dev) {
            is Person -> 
                if(dev.name == "Alice") "Alice's app $name" else "Not by Alice"
            else -> "Not by Alice"
        }
    }
    is Movie -> {
        val (title, diretor) = download
        if (director.name == "Alice") {
            "Alice's movie $title"
        } else {
            "Not by Alice"
        }

// With pattern matching:
val result = when(download) {
    is App(name, Person("Alice", _)) -> "Alice's app $name"
    is Movie(title, Person("Alice", _)) -> "Alice's movie $title"
    is App, Movie -> "Not by Alice"
}
```
