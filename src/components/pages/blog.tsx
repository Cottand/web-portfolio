/** @jsxImportSource @emotion/react */
import React, {FC} from "react";
import {List, ListItemButton, ListItemText, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import markdownBlogEntries from "../const/markdownBlogEntries";


export const BlogEntriesList: FC = () =>
    <List component={"nav"}>
        <MarkdownBlogEntry entryName="vpnLessHomelab"/>
        <Entry type={"talk"}
               title={"How Monzo uses AWS Nitro Enclaves to secure its sensitive workloads"}
               href={"https://www.youtube.com/watch?v=xxDy1cFAvHA"}
               date={"18/06/2025"}
               key={"talkMonzoNitroEnclaves"}
        />
        <MarkdownBlogEntry entryName="ociPublicLoadBalancer"/>
        <MarkdownBlogEntry entryName="FromMicroservicesToMonolith"/>
        <MarkdownBlogEntry entryName="MonorepoCiReproducibleBuilds"/>
        <Entry type={"external blog"}
               title={"Securing Monzo's software supply-chain better with reproducible builds for enclaves"}
               href={"https://monzo.com/blog/securing-our-software-supply-chain-better-with-reproducible-builds-for"}
               date={"20/07/2024"}
               key={"monzoReproducibleEnclaveBuilds"}
        />
        <MarkdownBlogEntry entryName="CockroachDBDisasterRecovery"/>
        <MarkdownBlogEntry entryName="DockerNotReproducible"/>
        <MarkdownBlogEntry entryName="MultiArchNixDockerImages"/>
        <MarkdownBlogEntry entryName="NixShellFlakeScriptingForHashLanguages"/>
        <MarkdownBlogEntry entryName="ReproducibleCacheableGradleDocker"/>
        <MarkdownBlogEntry entryName="DNSServiceDiscoveryAdblockingNomad"/>
        <MarkdownBlogEntry entryName="nomadNixos"/>
        <Entry type={"article"}
               title={"Detailed Case Study of Blockchain.com, a Fast-growing Cryptocurrency Company"}
               href={"https://github.com/Cottand/articles/raw/master/blockchainCaseStudy.pdf"}
               date={"29/02/2022"}
               key={"bcCrypto"}
        />
        <Entry type={"article"}
               title={"At Scale, Is it Worth Compromising on Stability for the Sake of Throughput?"}
               href={"https://github.com/Cottand/articles/raw/master/stabilityVsThroughput.pdf"}
               date={"24/02/2022"}
               key={"seScale"}
        />
        <Entry type={"article"}
               title={"When Are Microservice Architectures Beneficial?"}
               href={"https://github.com/Cottand/articles/raw/master/whenMicroservices.pdf"}
               date={"21/02/2022"}
               key={"seMicroS"}
        />
        {/*<Entry type={"talk"}*/}
        {/*       title={"Adding Pattern Matching to Kotlin"}*/}
        {/*       href={"https://youtu.be/Blj-7SGYUnE?t=215"}*/}
        {/*       date={"01/07/2020"}*/}
        {/*       key={"sePatterns"}*/}
        {/*       divider={false}*/}
        {/*/>*/}
    </List>


type Type = "blog" | "talk" | "article" | "external blog"

const MarkdownBlogEntry: FC<{ entryName: keyof (typeof markdownBlogEntries) }> = props => {
    const entry = markdownBlogEntries[props.entryName]
    return <Entry
        type={"blog"}
        key={entry.href}
        {...entry}
    />
}


const Entry: FC<{ type: Type; title: string; href: string; date: string; divider?: boolean; key: string }> = (props) =>
    <ListItemButton component={RouterLink} to={props.href} target={props.type == "blog" ? undefined : "_blank"}
                    divider={props.divider ?? true}>
        <div>
            <Typography variant={"caption"}>{props.date}</Typography>
            <ListItemText secondary={props.type}>{props.title}</ListItemText>
        </div>
    </ListItemButton>
