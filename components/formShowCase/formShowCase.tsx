import React from "react";
import { classicNameResolver } from "typescript";

import classes from "./formShowCase.module.css";

const days = ["Sun", "Mon", "Tu", "Wed", "Thurs", "Fri", "Sat"];
const monthNames = [
 "Jan",
 "Feb",
 "Mar",
 "Apr",
 "May",
 "Jun",
 "Jul",
 "Aug",
 "Sep",
 "Oct",
 "Nov",
 "Dec",
];

export default function FormShowCase({
 name,
 email,
 message,
}: {
 name: string;
 email: string;
 message: string;
}) {
 let d = new Date();
 let date = `${days[d.getDay()]} ${d.getDate()} ${monthNames[d.getMonth()]}`;
 return (
  <div className={classes.formShowCase}>
   <p className={classes.code}>
    <span className={classes.pink}>const</span>
    <span className={classes.blue}>button</span>
    <span style={{ margin: "0 10px 0 10px" }} className={classes.grey}>
     =
    </span>
    <span className={classes.blue}>document</span>
    <span className={classes.grey}>.</span>
    <span style={{ margin: 0 }} className={classes.blue}>
     querySelector
    </span>
    <span className={classes.grey}>(</span>
    <span className={classes.orange}>'#sendBtn'</span>
    <span className={classes.grey}>);</span>
   </p>

   <p className={classes.code}>
    <span className={classes.pink}>const</span>
    <span className={classes.blue}>message</span>
    <span style={{ margin: "0 10px 0 10px" }} className={classes.grey}>
     =
    </span>
    <span className={classes.grey}>&#x7B;</span>
   </p>
   <p className={classes.code}>
    <span style={{ marginLeft: 10 }} className={classes.blue}>
     name:
    </span>
    <span className={classes.orange}>"{name}"</span>
    <span className={classes.grey}>,</span>
   </p>
   <p className={classes.code}>
    <span style={{ marginLeft: 10 }} className={classes.blue}>
     email:
    </span>
    <span className={classes.orange}>"{email}"</span>
    <span className={classes.grey}>,</span>
   </p>
   <p className={classes.code}>
    <span style={{ marginLeft: 10 }} className={classes.blue}>
     message:
    </span>
    <span className={classes.orange}>"{message}"</span>
    <span className={classes.grey}>,</span>
   </p>
   <p className={classes.code}>
    <span style={{ marginLeft: 10 }} className={classes.blue}>
     date:
    </span>
    <span className={classes.orange}>"{date}"</span>
    <span className={classes.grey}>,</span>
   </p>
   <p className={classes.code}>
    <span className={classes.grey}>&#x7D;</span>
   </p>

   <p className={classes.code}>
    <span className={classes.blue}>button</span>
    <span className={classes.grey}>.</span>
    <span style={{ marginLeft: 0 }} className={classes.blue}>
     addEventListener
    </span>
    <span className={classes.grey}>(</span>
    <span className={classes.orange}>'click'</span>
    <span className={classes.grey}>,</span>
    <span className={classes.grey}>(</span>
    <span className={classes.grey}>)</span>
    <span style={{ margin: "0 10px 0 10px" }} className={classes.pink}>
     =&gt;
    </span>
    <span className={classes.grey}>&#x7B;</span>
   </p>
   <p className={classes.code}>
    <span style={{ marginLeft: 10 }} className={classes.blue}>
     form
    </span>
    <span className={classes.grey}>.</span>
    <span style={{ marginLeft: 0 }} className={classes.blue}>
     send
    </span>
    <span className={classes.grey}>(</span>
    <span className={classes.blue}>message</span>
    <span className={classes.grey}>);</span>
   </p>
   <p className={classes.code}>
    <span className={classes.grey}>&#x7D;</span>
    <span className={classes.grey}>)</span>
   </p>
  </div>
 );
}
