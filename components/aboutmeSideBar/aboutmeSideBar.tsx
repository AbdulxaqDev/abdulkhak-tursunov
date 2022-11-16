import React from "react";
import DropDown from "../dropDown/dropDown";
import {
 ArrowRightIcon,
 DropDownIcon,
 MIcon,
 FolderIcon,
 MailIcon,
 PhoneIcon,
} from "../../public/images/icons";

import classes from "./aboutmeSideBar.module.css";

export default function AboutmeSideBar({
 setInfoLabel,
}: {
 setInfoLabel: (text: string) => void;
}) {
 let labelPersonal = {
  name: "personal-info",
  iconMain: <ArrowRightIcon margin="14px" />,
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

 let contactLabel = {
  name: "contacts",
  iconMain: <ArrowRightIcon margin="10px 10px 10px 14px" />,
  iconSecondary: undefined,
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

 let contactTitles = [
  {
   icon: <MailIcon margin="10px 0px 10px 29px" />,
   name: "click & copy email",
  },
  {
   icon: <PhoneIcon margin="10px 10px 10px 39px" />,
   name: "+998993933028",
  },
 ];

 return (
  <div className={classes.aboutmeSideBar}>
   <DropDown
    label={labelPersonal}
    titles={undefined}
    styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
    setInfoLabel={setInfoLabel}
   >
    <DropDown
     label={labelBio}
     titles={undefined}
     children={undefined}
     styles={{}}
     setInfoLabel={setInfoLabel}
    ></DropDown>
    <DropDown
     label={labelInterests}
     titles={undefined}
     children={undefined}
     styles={{}}
     setInfoLabel={setInfoLabel}
    ></DropDown>
    <DropDown
     label={labelEducation}
     titles={educationTitles}
     children={undefined}
     styles={{}}
     setInfoLabel={setInfoLabel}
    ></DropDown>
   </DropDown>

   <DropDown
    label={contactLabel}
    titles={contactTitles}
    styles={{
     borderBottom: "1px solid #1e2d3d",
     borderTop: "1px solid #1e2d3d",
     height: 40,
    }}
    setInfoLabel={() => {}}
   >
    {}
   </DropDown>
  </div>
 );
}
