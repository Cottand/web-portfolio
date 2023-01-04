<link rel="stylesheet" href="/styles/markdown.module.css">

<img alt="DJStreamr" height="32px" src="assets/djstreamrLogoBlack.png"/>

[DJStreamr](https://djstreamr.com) is a collaborative platform for simultaneous, real-time DJ-ing.

The frontend uses **VueJS** and is written in **Kotlin/JS** and **Typescript**, while
the backend is fully written in **Kotlin/JVM** and is distributed between **AWS Lambda**
functions and a server.

<img src="assets/djstreamrLancelot_downscaled.jpg" class="centered border-radius" style="width: min(75%, 500px)"/>



DJStreamr abstracts away latency between to simultaneous performers by using the
metadata from audio files and the commands DJs emit to a central server. This allows for a
seamless experience for the audience. We hook the performance to popular streaming
platforms like Twitch or YouTube for ease of use.

I built DJStreamr along with Kacper Kazaniecki, Lancelot Blanchard and William Profit. My focus
was on the scalability of the service and the development of the cloud infrastructure in general.
            
