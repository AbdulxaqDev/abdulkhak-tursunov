import React from "react";
import classes from '../snakegame.module.css'
export default function Snake({ snakeDots }: { snakeDots: number[][] }) {
 return (
  <div>
   {snakeDots.map((dot, i) => {
    const style = {
     left: `${dot[0]}%`,
     top: `${dot[1]}%`,
    };
    return (
     <div key={i} className={classes.snakeDot} style={style}  ></div>
    );
   })}
  </div>
 );
}
