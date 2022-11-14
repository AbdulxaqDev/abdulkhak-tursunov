import React from "react";
import Link from "next/link";
import {
 TerminalIcon,
 BioIcon,
 GameControllerIcon,
} from "../../public/images/icons";

import classes from "./aboutmeSideNav.module.css";

export default function AboutmeSideNav() {
 return (
  <div className={classes.aboutmeSideNav}>
   <Link href="/projects/projects">
    <TerminalIcon margin="0" />
   </Link>
   <Link href="/aboutme/aboutme">
    <BioIcon margin="0" />
   </Link>
   <Link href="/">
    <GameControllerIcon margin="0" />
   </Link>
  </div>
 );
}
