import React from "react";
import Link from "next/link";
import {
 GithubIcon,
 LinkedinIcon,
 TelegramIcon,
} from "../../public/images/icons";

import classes from "./footer.module.css";

export default function Footer() {
 return (
  <footer className={classes.footer}>
   <ul>
    <Link style={{ padding: "0 20px" }} href="/hello/hello">
     find me in:
    </Link>
    <Link
     target="_blank"
     href="https://www.linkedin.com/in/abdulkhak-tursunov-a64221173/"
    >
     <LinkedinIcon margin="0" />
    </Link>
    <Link
     style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
     target="_blank"
     href="https://t.me/abdulkhak_tursunov"
    >
     <TelegramIcon margin="0" />
    </Link>
   </ul>
   <ul>
    <Link target="_blank" href="https://github.com/AbdulxaqDev">
     <span className={classes.githubUsername}>@AbdulxaqDev</span>
     <GithubIcon margin={"0"} />
    </Link>
   </ul>
  </footer>
 );
}
