import Link from "next/link";
import React, { useEffect, useState } from "react";

import classes from "./dropDown.module.css";

type Icon = JSX.Element[] | JSX.Element | undefined;
type IconTitle = (isChecked: boolean) => JSX.Element[] | JSX.Element;
type title = {
 name: string;
 Icon: Icon;
 socialLink?: string;
};
type titles = title[] | undefined;

type titleProjects = {
 name: string;
 Icon: IconTitle;
};
type titlesProjects = titleProjects[] | undefined;

type label = { name: string; iconMain: Icon; iconSecondary: Icon };
type height = string | number;

export default function DropDown({
 children,
 titles,
 label,
 styles,
 setInfoLabel = () => {},
 isProjects = false,
 titlesProjects,
 areProjects = false,
 removeTechTitle,
 addTechTitle,
 areSocials = false,
}: {
 label: label;
 titles?: titles;
 children?: any | undefined;
 styles?: {};
 setInfoLabel?: any;
 isProjects?: boolean;
 titlesProjects?: titlesProjects;
 areProjects?: boolean;
 removeTechTitle?: (tech: string) => void;
 addTechTitle?: (tech: string) => void;
 areSocials?: boolean;
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
     if (areProjects) return;
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
    {titles
     ? titles.map((title, i) => {
        return (
         <li
          onClick={() => {
           if (title.name === "click to copy") {
            navigator.clipboard.writeText("abdulkhak8tursunov@gmail.com");
           }
           if (
            title.name !== "click to copy" &&
            title.name !== "+998993933028"
           ) {
            setInfoLabel("personal-info / education / " + title.name);
           }
          }}
          key={i}
          className={classes.title}
         >
          {areSocials ? (
           title.socialLink && (
            <Link href={title.socialLink} target="_blank">
             {title.Icon}
             {title.name}
            </Link>
           )
          ) : (
           <>
            {title.Icon}
            {title.name}
           </>
          )}
         </li>
        );
       })
     : titlesProjects &&
       titlesProjects.map((title, i) => {
        const [isChecked, setIsCecked] = useState(false);
        const { Icon, name } = title;
        return (
         <li key={i} className={classes.title}>
          {isProjects ? (
           <>
            <input
             type="checkbox"
             onClick={(e) => {
              setIsCecked(e.currentTarget.checked);
              if (e.currentTarget.checked) {
               addTechTitle!(name);
              } else {
               removeTechTitle!(name);
              }
             }}
            />
            {Icon && Icon(isChecked)}
           </>
          ) : (
           <>{Icon}</>
          )}
          {name}
         </li>
        );
       })}
    {children}
   </ul>
  </div>
 );
}
