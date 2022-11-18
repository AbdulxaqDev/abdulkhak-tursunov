import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBrackets, GithubIcon } from "../../public/images/icons";

import classes from "./projectCard.module.css";

export default function ProjectCard({
 number,
 title,
 imageUrl,
 description,
 icon,
 sourseUrl,
 demoUrl,
}: {
 number: number;
 title: string;
 imageUrl: any;
 description: string;
 icon: JSX.Element;
 sourseUrl: string;
 demoUrl?: string;
}) {
 return (
  <div className={classes.projectCard}>
   <div className={classes.title}>
    <p>Project {number}</p> <p> // _{title}</p>
   </div>
   <span className={classes.icon}>{icon}</span>
   <Image
    src={imageUrl}
    alt={title}
    className={classes.projectImg}
    width={370}
    height={200}
   />
   <div className={classes.description}>
    <p>{description}</p>
    <div className={classes.btns}>
     <button>
      <Link href={sourseUrl} target="_blank">
       <CodeBrackets margin="0px 0 0" check={true} />
      </Link>
     </button>
     {demoUrl && (
      <button>
       <Link href={demoUrl} target="_blank">
       <GithubIcon/>
       </Link>
      </button>
     )}
    </div>
   </div>
  </div>
 );
}
