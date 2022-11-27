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

const info = [
`About me
   I have 2 years of experience as a front end developer. 
   Mainly focused javascript frameworks. 
   These are:
  Vue, React, React Native,  Redux, RTK, Nodejs, Nextjs, Electron Js MongoDB(NoSQL), Mongoose, Tailwind, MaterialUI. 
   I use Python too mostly for algorithms on leetcode, but did a project with a python framework, called Tkinter. 
   I integrated the Tkinter desktop app with AutoCAD to automate the drawing.
`,
`Bio
  I am 25 and from Uzbekistan. But, I live in Istanbul.
  I can speak:
   English(upper-intermediate)
   Turkish(intermediate)
   Russian(pre-intermediate)
   ---
   single
`,
`Interests
  I like doing sport and being healthy.
  I like phythical training, mostly doing push ups, push ups on bars and pull ups.
  I do also e-sport, gaming. I like to play CS:GO.
  I like also reading books, which are related to mostly ethical hacking and programming.
`,
`High-school
  I studied Technical Architecture and Building Engineering at Civil engineering and Econmics college, between 2014 and 2017.
`,
`University
  I studied  Geodesy, Cartography and Cadaster at Fergana politechnic institute, between 2018 and 2022.
`,
];

const aboutText = `
  About me
  I have 2 years of experience as a front end developer. Mainly focused javascript frameworks. These are Vue, React, React Native,  Redux, RTK, Nodejs, Nextjs, Electron Js MongoDB(NoSQL), Mongoose, Tailwind, MaterialUI. I use Python mostly for algorithms on leetcode, but did a project with a python framework, called Tkinter. I integrated the Tkinter app with AutoCAD to automate the drawing.
`;

const bioText = `
  I am 25 and from Uzbekistan. But, I live in Istanbul.
  I can speak English(upper-intermediate), Turkish(intermediate) and Russian(pre-intermediate)
  (--single--)
`;

const interestsText = `
  I like doing sport and being healthy.
  I like phythical training, mostly doing push ups, push ups on bars and pull ups.
  I do also e-sport, gaming. I like to play CS:GO.
  I like reading books, which are related to mostly ethical hacking and programming too.
`;

const eduHighSchoolText = `
  I studied Technical Architecture and Building Engineering at Civil engineering and Econmics college, between 2014 and 2017.
`;

const eduUniversityText = `
I studied  Geodesy, Cartography and Cadaster at Fergana politechnic institute, between 2018 and 2022.
`;

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
 const [abotmeText, setAboutmeText] = useState(0);
 const [infoLabel, setInfoLabel] = useState("personal-info");

 const changeInfoText = (text: string) => {
  if (text === "personal-info") {
   setAboutmeText(0);
  }
  if (text === "personal-info / bio") {
   setAboutmeText(1);
  }
  if (text === "personal-info / interests") {
   setAboutmeText(2);
  }
  if (text === "personal-info / education / high-school") {
   setAboutmeText(3);
  }
  if (text === "personal-info / education / university") {
   setAboutmeText(4);
  }
  console.log(text);

  setInfoLabel(text);
 };

 return (
  <Layout title="aboutme" styles={styles}>
   <div className={classes.aboutme}>
    <AboutmeSideNav />
    <AboutmeSideBar>
     <DropDown
      label={labelPersonal}
      styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
      setInfoLabel={changeInfoText}
     >
      <DropDown label={labelBio} setInfoLabel={changeInfoText}></DropDown>
      <DropDown label={labelInterests} setInfoLabel={changeInfoText}></DropDown>
      <DropDown
       label={labelEducation}
       titles={educationTitles}
       setInfoLabel={changeInfoText}
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
    <AboutmeInfo abotmeText={info[abotmeText]} infoLabel={infoLabel} />
    <AboutmeShowcase>
     {showcases.map((code, i) => (
      <CodeShowCase key={i} showcase={code} />
     ))}
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
