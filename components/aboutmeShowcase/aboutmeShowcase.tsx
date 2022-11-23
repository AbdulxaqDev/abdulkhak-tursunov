import React from "react";
import { XIcon } from "../../public/images/icons";

import classes from "./aboutmeShowcase.module.css";

export default function AboutmeShowcase({
 children,
 style,
 areProjects = false,
 title = "code snippet showcase:",
}: {
 children?: any;
 style?: {};
 areProjects?: boolean;
 title?: string;
}) {
 return (
  <div className={classes.aboutmeShowcase}>
   <div className={classes.manifester}>
    {title && (
     <div className={classes.identifier}>
      <p>
       <span className={classes.slash}>// </span> {title}
      </p>
      <XIcon margin="0 0 0 15px" />
     </div>
    )}
   </div>
   <div
    style={style}
    className={`${classes.showcaseWrapper} ${
     areProjects ? classes.projects : ""
    }`}
   >
    {children}
   </div>
  </div>
 );
}
