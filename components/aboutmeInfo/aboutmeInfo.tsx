import React, { useState } from "react";
import { XIcon } from "../../public/images/icons";

import classes from "./aboutmeInfo.module.css";

export default function AboutmeInfo({
 abotmeText,
 setAboutmeText,
 infoLabel,
}: {
 abotmeText: string;
 setAboutmeText: (text: string) => void;
 infoLabel: string;
}) {
 const [rowNums, setRowNums] = useState(16);
 const [edit, setEdit] = useState(false);

 return (
  <div className={classes.aboutmeInfo}>
   <div className={classes.manifester}>
    <div className={classes.identifier}>
     <p>{infoLabel}</p>
     <XIcon margin="0 0 0 15px" />
    </div>
   </div>
   <textarea
    readOnly={edit}
    maxLength={550}
    onInput={(e) => {
     const target = e.target as HTMLInputElement;
     setRowNums(target.value.match(/\n/g)!.length + 1);
     if (rowNums > 21) {
      setEdit(true);
     }
    }}
    value={abotmeText}
    className={classes.aboutmeTextArea}
    onChange={(e) => {
     if (!edit) setAboutmeText(e.target.value);
    }}
   ></textarea>
   <div className={classes.rowNums}>
    {new Array(rowNums).fill(0).map((num, i) => (
     <span className={classes.num} key={i}>
      {i + 1}
     </span>
    ))}
   </div>
  </div>
 );
}
