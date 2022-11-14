import React, { useState } from "react";

import classes from "./dropDown.module.css";

type Icon = JSX.Element[] | JSX.Element | undefined;
type title = { name: string; icon: Icon };
type titles = title[] | undefined;
type label = { name: string; iconMain: Icon; iconSecondary: Icon };
type height = string | number

export default function DropDown({
 children,
 titles,
 label,
 styles,
}: {
 label: label;
 titles: titles;
 children: any;
  styles: {};
 }) {
 const [dropHeight, setDropHeight] = useState<height>(0)

 const drop = () => {
  setDropHeight(pre => (pre !== 0 ? 0 : "unset"))
 }

 return (
  <div
   className={classes.main}
  >
   <h3 style={{ ...styles }} className={classes.label}
    onClick={drop}
   >
    {label.iconMain}
    {label.iconSecondary}
    {label.name}
   </h3>
   <ul style={{maxHeight: dropHeight, overflow: 'hidden'}} >
    {titles &&
     titles.map((title, i) => (
      <li className={classes.title}>
       {title.icon}
       {title.name}
      </li>
     ))}
    {children}
   </ul>
  </div>
 );
}
