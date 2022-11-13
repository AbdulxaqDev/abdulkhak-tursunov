import React from "react";
import classes from "../snakegame.module.css";
export default function Snake({
 snakeDots,
 direction,
}: {
 snakeDots: number[][];
 direction: string;
}) {
 return (
  <div>
   {snakeDots.map((dot, i) => {
    const style = {
     left: `${dot[0]}%`,
     top: `${dot[1]}%`,
     borderRadius:
      i == snakeDots.length - 1
       ? direction === "RIGHT"
         ? "0 5px 5px 0"
         : direction === "UP"
         ? "5px 5px 0 0"
         : direction === "LEFT"
         ? "5px 0 0 5px"
         : "0 0 5px 5px"
       : 0,
     backgroundImage:
      i < 4
       ? `linear-gradient(to ${
          direction === "DOWN"
           ? "bottom"
           : direction === "UP"
           ? "top"
           : direction.toLowerCase()
         }, ${
          i === 0
           ? "#43D9AD00 , #43D9AD30"
           : i === 1
           ? "#43D9AD00 , #43D9AD60"
           : i === 2
           ? "#43D9AD35 , #43D9AD80"
           : "#43D9AD70 , #43D9AD80, #43D9AD"
         })`
       : "#43D9AD",
     backgroundColor: i < 4 ? "" : "#43D9AD",
    };
    return <div key={i} className={classes.snakeDot} style={style}></div>;
   })}
  </div>
 );
}
