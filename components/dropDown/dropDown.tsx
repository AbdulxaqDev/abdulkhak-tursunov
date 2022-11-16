import React, { useState } from "react";

import classes from "./dropDown.module.css";

type Icon = JSX.Element[] | JSX.Element | undefined;
type title = { name: string; icon: Icon };
type titles = title[] | undefined;
type label = { name: string; iconMain: Icon; iconSecondary: Icon };
type height = string | number;

export default function DropDown({
 children,
 titles,
 label,
 styles,
 setInfoLabel,
}: {
 label: label;
 titles: titles;
 children: any | undefined;
 styles: {};
 setInfoLabel: any;
}) {
 const [dropHeight, setDropHeight] = useState<height>(0);
 const [rotate, setRotate] = useState(0);

 const drop = () => {
  setDropHeight((pre) => (pre !== 0 ? 0 : "unset"));
  setRotate((pre) => (pre !== 0 ? 0 : 90));
 };

 return (
  <div className={classes.main}>
   <h3
    style={{ ...styles }}
    className={classes.label}
    onClick={() => {
     drop();
     if (label.name !== "contacts" && label.name !== "personal-info") {
      setInfoLabel("personal-info / " + label.name);
     } else {
      setInfoLabel("personal-info");
     }
    }}
   >
    <span style={{ transform: `rotate(${rotate}deg)` }}>{label.iconMain}</span>
    {label.iconSecondary}
    {label.name}
   </h3>
   <ul style={{ maxHeight: dropHeight, overflow: "hidden" }}>
    {titles &&
     titles.map((title, i) => (
      <li
       onClick={() => {
        if (title.name === "click to copy") {
         navigator.clipboard.writeText("abdulkhak8tursunov@gmail.com");
        }
        if (title.name !== "click to copy" && title.name !== "+998993933028") {
         setInfoLabel("personal-info / education / " + title.name);
        }
       }}
       key={i}
       className={classes.title}
      >
       {title.icon}
       {title.name}
      </li>
     ))}
    {children}
   </ul>
  </div>
 );
}
