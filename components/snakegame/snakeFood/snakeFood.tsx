import React from "react";
import classes from "../snakegame.module.css";
import { SnakeFoodIcon } from "../../../public/images/icons";

export default function SnakeFood({ dot }: { dot: number[] }) {
 const style = {};
 return (
  <div
   style={{ top: dot[0] + "%", left: dot[1] + "%" }}
   className={classes.snakeFood}
  >
   <SnakeFoodIcon />
  </div>
 );
}
