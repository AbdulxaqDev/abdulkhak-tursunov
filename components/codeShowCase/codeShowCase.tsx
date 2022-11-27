import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import hljs from "highlight.js";

import Markdown from "react-markdown";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import classes from "./codeShowCase.module.css";

export default function CodeShowCase({
 showcase,
 isFormShowCase = false,
 style,
}: {
 showcase: string;
 isFormShowCase?: boolean;
 style?: {};
}) {
 const myLoader = () => {
  return `https://avatars.githubusercontent.com/u/102298716?s=400&u=fb52639e9026b49e65f38f3bcb5fe8fdebb90f35&v=4`;
 };
 const codeRef = useRef(null);

 marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
   return hljs.highlightAuto(code, ["html", "javascript"]).value;
  },
 });

 useEffect(() => {
  const el = codeRef.current as any;
  el!.children[0].children[0].style.background = "#111b2700";
  el!.children[0].children[0].style.scroll = "hidden";
  el!.children[0].children[0].style.scroll = "hidden";
  el!.children[0].children[0].style.wordBreak = "break-all";
 }, []);

 return (
  <div className={classes.codeShowCase}>
   {!isFormShowCase && (
    <div className={classes.info}>
     <Image
      loader={myLoader}
      src="me.png"
      alt="Abdulkhak Tursunov"
      width={36}
      height={36}
      className={classes.myImage}
     />
     <div>
      <h3>
       <Link href="https://github.com/AbdulxaqDev" target="_blank">
        @AbdulxaqDev
       </Link>
      </h3>
      <p>Created at 14-11-2022</p>
     </div>
    </div>
   )}
   <div style={style} className={classes.code} ref={codeRef}>
    <Markdown
     components={{
      code({ node, inline, className, children, ...props }) {
       const match = /language-(\w+)/.exec(className || "");

       return !inline && match ? (
        <SyntaxHighlighter
         style={coldarkDark}
         PreTag="div"
         language={match[1]}
         // eslint-disable-next-line no-use-before-define
         children={String(children).replace(/\n$/, "")}
         {...props}
        />
       ) : (
        <code className={className ? className : ""} {...props}>
         {children}
        </code>
       );
      },
     }}
    >
     {`
\`\`\`typescript
${showcase}
\`\`\`
`}
    </Markdown>
   </div>
  </div>
 );
}
