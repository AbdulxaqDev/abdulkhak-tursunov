import React from "react";
import { classicNameResolver } from "typescript";

import classes from "./formShowCase.module.css";

export default function FormShowCase() {
 return <div className={classes.formShowCase}>
  <p className={classes.code} >
   <span className={classes.pink}>const</span>
   <span className={classes.blue}>button</span>
   <span style={{marginLeft: 5}} className={classes.grey}>=</span>
   <span className={classes.blue}>document.querySelector</span><span className={classes.grey}>(</span>
   <span className={classes.orange}>'#sendBtn'</span>
   <span className={classes.grey}>);</span>
  </p>
 </div>;
}
