import React from "react";
import DropDown from "../dropDown/dropDown";
import {
 ArrowBottomIcon,
 ArrowRightIcon,
 DropDownIcon,
 MIcon,
 FolderIcon,
} from "../../public/images/icons";

import classes from "./aboutmeSideBar.module.css";

export default function AboutmeSideBar() {
 
 let labelPersonal = {
  name: "personal-info",
  iconMain: <ArrowBottomIcon margin="14px" />,
  iconSecondary: undefined,
 };

 let labelBio = {
  name: "bio",
  iconMain: <DropDownIcon margin="10px 10px 10px 14px" />,
  iconSecondary: <FolderIcon margin="10px 10px 10px 5px" fill="#E99287" />,
 };

 let labelInterests = {
  name: "interests",
  iconMain: <DropDownIcon margin="10px 10px 10px 14px" />,
  iconSecondary: <FolderIcon margin="10px 10px 10px 5px" fill="#43D9AD" />,
 };

 let labelEducation = {
  name: "education",
  iconMain: <DropDownIcon margin="10px 10px 10px 14px" />,
  iconSecondary: <FolderIcon margin="10px 10px 10px 5px" fill="#3A49A4" />,
 };

 let educationTitles = [
  {
   icon: <MIcon margin="10px 10px 10px 39px" />,
   name: "high-school",
  },
  {
   icon: <MIcon margin="10px 10px 10px 39px" />,
   name: "university",
  },
 ];

 return (
  <div className={classes.aboutmeSideBar}>
   <DropDown
    label={labelPersonal}
    titles={undefined}
    styles={{borderBottom: "1px solid #1e2d3d", height: 40}}
   >
    <DropDown
     label={labelBio}
     titles={undefined}
     children={undefined}
     styles={{}}
    ></DropDown>
    <DropDown
     label={labelInterests}
     titles={undefined}
     children={undefined}
     styles={{}}
    ></DropDown>
    <DropDown
     label={labelEducation}
     titles={educationTitles}
     children={undefined}
     styles={{}}
    ></DropDown>
   </DropDown>
  </div>
 );
}
