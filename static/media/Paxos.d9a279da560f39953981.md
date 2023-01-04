[Paxos](https://paxos.systems/how/)
is a
[consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) algorithm.
As part of a university project, we implemented a variant (Multi-Paxos), by modelling
a cluster of servers and clients, where the servers each maintained a copy of a ledger database, and
the clients broadcasted transactions. The implementation must guarantee a number of properties:

- **Consistency**: transactions are appended in the same order to all ledgers

- **Liveness**: all transactions will eventually be appended

- **Safety**: only transactions broadcast by clients will be appended

- **Failure tolerance**: as long as a majority of replicas is correct (ie, have not crashed),
we will maintain Consistency, Liveness, and Safety.

<figure>
<img src="assets/multiPaxosUml.png" class="centered border-radius" style="width: min(90%, 650px)"/>
<figcaption align = "center"><i>UML diagram of the lifecycle a Client's request</i></figcaption>
</figure>
