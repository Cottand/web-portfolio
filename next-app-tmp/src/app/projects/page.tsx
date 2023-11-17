/** @jsxImportSource @emotion/react */
"use client"
import React, {FC, useEffect, useRef, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Link,
    Typography,
    useTheme
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "../portfolio.module.css";
import {css} from "@emotion/react";
import {MdRenderer} from "@/components/markdown/MdFile";
import {PanelEntry, PanelName, panels} from "@/components/projectPanels";

type EntryProps = PanelEntry & {
    handleChange: (event: any, expanded: boolean) => void
    expandedPanel: PanelName | null
    aligned: boolean
}

const ProjEntry: FC<EntryProps> = (props) => {
    const HeadingTypo = () => <Typography
        css={css`padding-left: 4px`}
        fontSize={"20px"}
        fontWeight={"bold"}
    >{props.name}</Typography>
    const Heading = () =>
        <div className={styles.heading}>
            {props.icon ?? <></>}
            <HeadingTypo/>
        </div>
    const Subheading = () => {
        const theme = useTheme()
        return <Typography
            color={theme.palette.text.secondary}
            className={styles.subheading}>{props.summary}</Typography>
    }


    const ref = useRef<HTMLDivElement>(null)

    const onTransitionEnd = () => {
        if (props.expandedPanel === props.name)
            ref.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }
    return (
        <Accordion
            expanded={props.expandedPanel === props.name}
            onChange={props.handleChange}
            onTransitionEnd={() => onTransitionEnd()}
        >
            <AccordionSummary
                ref={ref}
                expandIcon={<ExpandMoreIcon color={"primary"}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                {props.aligned
                    ? (
                        <>
                            <Heading/>
                            <Subheading/>
                        </>
                    )
                    : (
                        <div css={css`vertical-align: middle`}>
                            <Heading/>
                            <Subheading/>
                        </div>
                    )}
            </AccordionSummary>
            <AccordionDetails>
                <div className={css`width: 100%`.name}>
                    {props.gh === undefined ? (<div/>) : (<GithubBanner repo={props.gh}/>)}
                    {props.gh === undefined ? (<div/>) : (<br/>)}
                </div>
                <MdRenderer foldCode={false} file={props.markdown}/>
            </AccordionDetails>
        </Accordion>
    )
}
export default Projects
export function Projects() {
    const [expanded, setExpanded] = useState<PanelName | null>(null);
    const handleChange = (panel: PanelName) => (_: any, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : null)
    };
    const [aligned, setAligend] = useState(window.innerWidth > 600);
    const updater = () => setAligend(window.innerWidth > 600);
    useEffect(() => {
            window.addEventListener("resize", updater);
            return () => window.removeEventListener("resize", updater);
        }
    );

    return (
        <div css={css`width: 100%`}>
            {panels.map((p) => (
                <ProjEntry
                    key={p.name}
                    handleChange={handleChange(p.name)}
                    expandedPanel={expanded}
                    aligned={aligned}
                    {...p}
                />
            ))}
        </div>
    )

}

function GithubBanner(props: { repo: string }) {
    const svgWidth = "32px"
    const theme = useTheme()
    return (
        <div
            css={css`text-align: center;
              position: relative;
              width: fit-content;
              height: fit-content`}
        >

            <Link href={`https://github.com/${props.repo}`}>
                <div
                    css={css`float: left`}
                >
                    <GitHubIcon css={css`width: ${svgWidth};
                      height: ${svgWidth};
                      vertical-align: center;
                      position: absolute`}/>
                </div>
                <Typography
                    css={css`padding-left: calc(${svgWidth} + ${theme.spacing(1)});
                      height: fit-content;
                      line-height: ${svgWidth};`}>
                    {props.repo}
                </Typography>
            </Link>
        </div>
    )
}

