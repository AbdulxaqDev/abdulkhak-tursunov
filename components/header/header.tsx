import React, { useEffect, useState } from "react";
import Link from "next/link";
import BurgerBtn from "../burgerbtn/burgerBtn";

import classes from "./header.module.css";

export default function Header({ pagetitle }: { pagetitle: string }) {
 const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
 const ChangeNav = () => {
  setIsNavVisible(!isNavVisible);
 };
 return (
  <nav className={`${classes.nav} ${isNavVisible ? classes.showNav : ""}`}>
   <ul>
    <Link href="/">abdulkhak-tursunov</Link>
    <Link
     className={pagetitle === "hello" ? classes.activeNavLink : ""}
     href="/"
    >
     _hello
    </Link>
    <Link
     className={pagetitle === "aboutme" ? classes.activeNavLink : ""}
     href="/aboutme/aboutme"
    >
     _about-me
    </Link>
    <Link
     className={pagetitle === "projects" ? classes.activeNavLink : ""}
     href="/projects/projects"
    >
     _projects
    </Link>
   </ul>
   <div className={classes.burgerBtn}>
    <BurgerBtn ChangeNav={ChangeNav} />
   </div>
   <ul>
    <Link
     className={pagetitle === "contactme" ? classes.activeNavLink : ""}
     href="/contactme/contactme"
    >
     _contact-me
    </Link>
   </ul>
  </nav>
 );
}
