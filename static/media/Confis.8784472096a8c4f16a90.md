[**Confis**](https://confis.dcotta.eu) was the final project of my Master's degree in Computer Science at
Imperial College London.
It received high marks as well as a prizes for _Project Excellence_ and _Corporate Partnership_.

You can find a fill write-up of the thesis [here](https://github.com/Cottand/Confis/blob/master/report/report.pdf).

It is a framework for writing and representing legal agreements, as well as querying them for analysis on legal
capabilities, obligations, and compliance. It includes its own language to write legal contracts and the ability to ask questions in order to allow parties to figure out their legal capabilities and responsibilities.
This is done through a _Domain-Specific Language_ (DSL) and a UI implemented on top of IntelliJ IDEA.

It is meant to be a generalisation of a
[Ricardian Contract](https://en.wikipedia.org/wiki/Ricardian_contract).


## Quick example
Below is a simple license agreement where `alice` licenses some data to `bob` in exchange for a fee of £100, which must be paid sometime in the month of April 2022.
Additionally, `bob` may not use the data for commercial purposes.

```kotlin
val alice by party
val bob by party

val payLicenseFeeTo by action("Fee of £100")
val use by action("Use as in deriving statistics from")
val share by action

val data by thing

// a plaintext clause that we do not wish to try to encode
-"""
    The Licence and the terms and conditions thereof shall be governed and construed in
    accordance with the law of England and Wales.
"""


bob must payLicenseFeeTo(alice) underCircumstances {
    within { (1 of April)..(30 of April) year 2022 }
}

alice must share(data) underCircusmtances {
    after { bob did payLicenseFeeTo(alice) }
}

bob may use(data) asLongAs {
    after { bob did payLicenseFeeTo(alice) }
}

bob mayNot use(data) asLongAs {
    with purpose Commercial
}
```
