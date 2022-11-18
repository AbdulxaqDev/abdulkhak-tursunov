import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import AboutmeSideNav from "../../components/aboutmeSideNav/aboutmeSideNav";
import AboutmeSideBar from "../../components/aboutmeSideBar/aboutmeSideBar";
import AboutmeInfo from "../../components/aboutmeInfo/aboutmeInfo";
import DropDown from "../../components/dropDown/dropDown";
import AboutmeShowcase from "../../components/aboutmeShowcase/aboutmeShowcase";
import CodeShowCase from "../../components/codeShowCase/codeShowCase";
import {
 ArrowRightIcon,
 DropDownIcon,
 MIcon,
 FolderIcon,
 MailIcon,
 PhoneIcon,
} from "../../public/images/icons";

import classes from "./aboutme.module.css";

const styles = {
 height: undefined,
};

const aboutText = `/*
  About me
  I have 5 years of еxperience in web
  development lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in
 
  Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat 
  nulla pariatur. Excepteur sint occaecat 
  officia deserunt mollit anim id est laborum.
*/`;

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
  Icon: <MIcon margin="10px 10px 10px 39px" />,
  name: "high-school",
 },
 {
  Icon: <MIcon margin="10px 10px 10px 39px" />,
  name: "university",
 },
];

let contactTitles = [
 {
  Icon: <MailIcon margin="10px 0px 10px 29px" />,
  name: "click & copy email",
 },
 {
  Icon: <PhoneIcon margin="10px 10px 10px 39px" />,
  name: "+998993933028",
 },
];

const showcases = [
 `
 // Snake game's board component

 import React, { useState } from "react";
 import Link from "next/link";
 import {
  ArrowBottomIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopIcon,
  SnakeFoodIcon,
  SnakeFoodInactiveIcon,
 } from "../../../public/images/icons";
 import Buttons from "../buttons/buttons";
 import classes from "./snakeGameBoard.module.css";
 
 type children = JSX.Element[] | JSX.Element;
 
 export default function SnakeGameBoard({
  children,
  foods,
  isStarted,
  gameCondition,
  startGame,
 }: {
  children: children;
  foods: number[];
  isStarted: boolean;
  gameCondition: string;
  startGame: () => void;
 }) {
  return (
   <div className={classes.snakeGameBoard}>
    {children}
    <div className={classes.description}>
     <GameDes />
     <SnakeFoods foods={foods} />
    </div>
    <SkrewButton coordinate={[3, 3]} />
    <SkrewButton coordinate={[93, 3]} />
    <SkrewButton coordinate={[93, 93]} />
    <SkrewButton coordinate={[3, 93]} />
    <Buttons
     startGame={startGame}
     gameCondition={gameCondition}
     coords={[32, 300]}
     isGameStarted={isStarted}
    />
    <SkipBtn />
   </div>
  );
 }
 
 const SkrewButton = ({ coordinate }: { coordinate: number[] }) => (
  <div
   style={{ left: coordinate[0] + "%", top: coordinate[1] + "%" }}
   className={classes.skrewBtn}
  >
   <ScrewBtnX />
  </div>
 );
 
 const ScrewBtnX = () => (
  <svg width={7} height={6} fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M.46 5.566 6 .976m-5.54 0L6 5.566" stroke="#114944" />
  </svg>
 );
 
 const GameDes = () => (
  <div className={classes.gameDes}>
   <div>
    <p>// use keyboard</p>
    <p>// arrows to play</p>
   </div>
   <div>
    <div
     style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
     <div className={classes.arrowWrapper}>
      <ArrowTopIcon margin="0" />
     </div>
    </div>
    <div
     style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
     <div className={classes.arrowWrapper}>
      <ArrowLeftIcon margin="0" />
     </div>
     <div className={classes.arrowWrapper}>
      <ArrowBottomIcon margin="0" />
     </div>
     <div className={classes.arrowWrapper}>
      <ArrowRightIcon margin="0" />
     </div>
    </div>
   </div>
  </div>
 );
 
 const SnakeFoods = ({ foods }: { foods: number[] }) => (
  <div className={classes.snakeFoods}>
   <div>
    <p>// food left</p>
   </div>
   <div className={classes.foods}>
    <div>
     {foods.map((food, i) =>
      food ? (
       <SnakeFoodIcon key={i} isInGame={false} margin="2px" />
      ) : (
       <SnakeFoodInactiveIcon key={i} margin="2px" />
      )
     )}
    </div>
   </div>
  </div>
 );
 
 const SkipBtn = () => (
  <button className={classes.skipBtn}>
   <Link href="/aboutme/aboutme">skip</Link>
  </button>
 );`,
];

export default function Aboutme() {
 const [abotmeText, setAboutmeText] = useState(aboutText);
 const [infoLabel, setInfoLabel] = useState("personal-info");

 return (
  <Layout title="aboutme" styles={styles}>
   <div className={classes.aboutme}>
    <AboutmeSideNav />
    <AboutmeSideBar>
     <DropDown
      label={labelPersonal}
      styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
      setInfoLabel={setInfoLabel}
     >
      <DropDown label={labelBio} setInfoLabel={setInfoLabel}></DropDown>
      <DropDown label={labelInterests} setInfoLabel={setInfoLabel}></DropDown>
      <DropDown
       label={labelEducation}
       titles={educationTitles}
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
     >
      {}
     </DropDown>
    </AboutmeSideBar>
    <AboutmeInfo
     abotmeText={abotmeText}
     setAboutmeText={setAboutmeText}
     infoLabel={infoLabel}
    />
    <AboutmeShowcase>
     {showcases.map((code, i) => (
      <CodeShowCase key={i} showcase={code} />
     ))}
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
