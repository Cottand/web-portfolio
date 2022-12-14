/** @jsxImportSource @emotion/react */
import {FC, useCallback, useEffect, useMemo, useState} from "react";
import ReactMarkdown from "react-markdown";
import {Util} from "../util";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export const MdRenderer: FC<{ file: string}> = (props) => {
    const makemSourceRequest = useCallback(
        () => fetch(props.file).then((r) => r.text()),
        [props.file]
    )
    const [content, setContent] = useState<string>("")
    useEffect(() => {
        const req = makemSourceRequest();
        if (!req) return
        req.then(setContent);
    }, [makemSourceRequest])


    return useMemo(() => (
        <ReactMarkdown
            components={{
                a: Util.mdAsMuiLink,
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            // @ts-ignore
                            style={atomDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
            rehypePlugins={[rehypeRaw]}
            children={content}
        />

    ), [content])
};
