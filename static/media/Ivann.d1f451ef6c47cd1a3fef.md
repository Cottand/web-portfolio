<link rel="stylesheet" href="/styles/markdown.module.css">

[IVANN](https://icivann.github.io/ivann) is an online visual network builder, written using **Typescript** and **VueJS**
. It generates Python files that can then be run anywhere in order to train and evaluate models.

<img src="assets/ivannLancelot_downscaled.jpeg" class="centered border-radius" style="width: min(95%, 450px)"/>

It is aimed at Machine Learning researchers,
it looks to abstract away the coding aspect of coming up with a neural network model so
the scientist can focus on the design. In order to achieve this, the network is represented as a
graph where the layers (or simply components) of the model are nodes which can be connected.


This graph can then be used to perform static analysis to catch mistakes and provide
early feedback to the user (much like an IDE would!).

<figure>
<img src="assets/ivannLinearLayersCheck.jpeg" class="centered border-radius" style="width: min(99%, 450px)"/>
<figcaption align = "center"><i>Visual feedback of a check for matching matrix dimensions</i></figcaption>
</figure>

In order to cater to all niches, Ivann supports _custom nodes_, which means the user can make
a node out of inline python. This allows using the UI to quickly access the most common bits
of the network, while being able to fine-tune other parts of the graph.

We developed Ivann as a team of 7. My focus was on the logic concerned with the IR, the static
analysis, and making code generation of Python code with Javascript objects a type-safe development
experience. In a way, Ivann reminded me a lot of engineering the compiler for WACC.

Even then, Ivann was my first purely frontend project, and I got to learn about how difficult it is,
and how its challenges are very different from the ones I encounter when doing backend development.
