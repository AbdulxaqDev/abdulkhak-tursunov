import React, { useState } from "react";
import { XIcon } from "../../public/images/icons";

import classes from "./aboutmeInfo.module.css";

export default function AboutmeInfo({
 abotmeText,
 infoLabel,
 children,
}: {
 abotmeText?: string;
 infoLabel: string;
 children?: any;
}) {
 const [rowNums, setRowNums] = useState(16);

 return (
  <div className={classes.aboutmeInfo}>
   <div className={classes.manifester}>
    <div className={classes.identifier}>
     <p>
      <span className={classes.slash}>&#47;&#47; </span>
      {infoLabel}
     </p>
     <XIcon margin="0 0 0 15px" />
    </div>
   </div>
   {children ? (
    children
   ) : (
    <>
     <pre className={classes.aboutmeTextArea}>&#47;*{abotmeText}*&#47;</pre>
     <div className={classes.rowNums}>
      {new Array(rowNums).fill(0).map((num, i) => (
       <span className={classes.num} key={i}>
        {i + 1}
       </span>
      ))}
     </div>
    </>
   )}
  </div>
 );
}
