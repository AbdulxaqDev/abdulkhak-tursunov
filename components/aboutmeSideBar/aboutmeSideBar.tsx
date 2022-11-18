import React from "react";
import classes from "./aboutmeSideBar.module.css";
export default function AboutmeSideBar({ children }: { children: any }) {
 return <div className={classes.aboutmeSideBar}>{children}</div>;
}
