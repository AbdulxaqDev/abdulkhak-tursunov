import React, { useEffect, useState } from "react";
import classes from "../snakegame.module.css";
import { SnakeFoodIcon } from "../../../public/images/icons";

export default function SnakeFood({ dot }: { dot: number[] }) {
 const [foodCoords, setFoodCords] = useState({});

 useEffect(() => {
  setFoodCords((pre) => ({
   ...pre,
   left: `${dot[0]}%`,
   top: `${dot[1]}%`,
  }));
 }, [dot[0], dot[1]]);

 return (
  <div style={foodCoords} className={classes.snakeFood}>
   <SnakeFoodIcon isInGame={true} margin="0" />
  </div>
 );
}
