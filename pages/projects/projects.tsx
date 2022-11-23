import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import AboutmeSideBar from "../../components/aboutmeSideBar/aboutmeSideBar";
import DropDown from "../../components/dropDown/dropDown";
import AboutmeShowcase from "../../components/aboutmeShowcase/aboutmeShowcase";
import ProjectCard from "../../components/projectCard/projectCard";
import {
 HtmlIcon,
 CssIcon,
 VueIcon,
 ReactIcon,
 NextIcon,
 AngularIcon,
 GatsbyIcon,
 ReactNativeIcon,
 FlutterIcon,
 NodeIcon,
 PythonIcon,
 MongoDBIcon,
 ArrowRightIcon,
} from "../../public/images/icons";

// images
import reactCalculator from "../../public/images/calculator_freecodecamp.png";
import grossProfit from "../../public/images/grossprofit.png";
import simSimApp from "../../public/images/simsimapp.png";
import pomidoroSite from "../../public/images/pomidorsite.png";
import drumMachine from "../../public/images/drummachine.png";
import randomQuote from "../../public/images/randomquote.png";
import markdown from "../../public/images/markdown.png";
import pomidoroMobile from "../../public/images/pomidoromobile.png";
import adminPanel from "../../public/images/adminpanel.png";
import gmail from "../../public/images/gmail.png";
import fakeDataGenerator from "../../public/images/fakedatagenerator.png";
import portfolio from "../../public/images/portfolio.png";

import classes from "./projects.module.css";

const labelProjects = {
 name: "projects",
 iconMain: <ArrowRightIcon margin="10px 10px 10px 14px" />,
 iconSecondary: undefined,
};

const projectsTitles = [
 {
  Icon: (isChecked: boolean) => (
   <HtmlIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "HTML",
 },
 {
  Icon: (isChecked: boolean) => (
   <CssIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "CSS",
 },
 {
  Icon: (isChecked: boolean) => (
   <VueIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Vue",
 },
 {
  Icon: (isChecked: boolean) => (
   <ReactIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "React",
 },
 {
  Icon: (isChecked: boolean) => (
   <AngularIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Angular",
 },
 {
  Icon: (isChecked: boolean) => (
   <NextIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Nextjs",
 },
 {
  Icon: (isChecked: boolean) => (
   <GatsbyIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Gatsby",
 },

 {
  Icon: (isChecked: boolean) => (
   <ReactNativeIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "React Native",
 },
 {
  Icon: (isChecked: boolean) => (
   <FlutterIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Flutter",
 },
 {
  Icon: (isChecked: boolean) => (
   <NodeIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Nodejs",
 },
 {
  Icon: (isChecked: boolean) => (
   <PythonIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "Python",
 },
 {
  Icon: (isChecked: boolean) => (
   <MongoDBIcon margin="10px 10px 10px 14px" check={isChecked} />
  ),
  name: "MongoDB",
 },
];

const projectsData = [
 {
  number: 1,
  title: "nextjs-react",
  imageUrl: portfolio,
  description: "This is my portfolio site as you can see.",
  icon: (
   <>
    <NextIcon check={true} />
    <ReactIcon check={true} />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  demoUrl: "/",
  tech: ["React", "Nextjs", "HTML", "CSS", "all"],
 },
 {
  number: 2,
  title: "vue-website",
  imageUrl: grossProfit,
  description:
   "One of my freelances. Implemented Vue, HTML and CSS. User friendly. Responsive. Visit the live demo for more experience.",
  icon: (
   <>
    <VueIcon check={true} />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  demoUrl: "https://test-gross-profit.netlify.app/",
  tech: ["Vue", "HTML", "CSS", "all"],
 },
 {
  number: 3,
  title: "react-native-app",
  imageUrl: simSimApp,
  description:
   "One of my freelances. Implemented React Native, React Native components, Redux, Websocket. User friendly. Responsive. This app special for me, because I designed it with Figma.\n Note: I have not published this app yet, so I shared YouTube video of this app",
  icon: <ReactNativeIcon />,
  sourceUrl: "https://github.com/AbdulxaqDev/react-native-simsim-app",
  demoUrl: "https://youtube.com/shorts/KJpujVUt2KE?feature=share",
  tech: ["React Native", "all"],
 },
 {
  number: 4,
  title: "react-native-app",
  imageUrl: pomidoroMobile,
  description:
   "Mobile version of Pomidoro time managment. I am working on this app going to add some extra features. I implementes Typescript in this app, which helped me to practise typescript. So, I haven't publish this app to Play market or Play store, but I shared its recored video on YouTube. Watch the video, you can what features it has.",
  icon: <ReactIcon />,
  sourceUrl: "https://github.com/AbdulxaqDev/ztm_rn",
  demoUrl: "https://youtu.be/4WKzau4Ras0",
  tech: ["React Native", "all"],
 },
 {
  number: 5,
  title: "react-calculator",
  imageUrl: reactCalculator,
  description:
   "Simple react calculator with soft UI. Comforts the user with its soft design and UX. Try it out!",
  icon: (
   <>
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl:
   "https://github.com/AbdulxaqDev/react-javascript-calculator-freecodecamp",
  demoUrl:
   "https://abdulxaqdev.github.io/react-javascript-calculator-freecodecamp/",
  tech: ["React", "HTML", "CSS", "all"],
 },
 {
  number: 6,
  title: "react-pomidoro-clock",
  imageUrl: pomidoroSite,
  description:
   "Simple react pomidoro web app with user friendly UI. If you are strugling to manage yout time, use this app. Train 25 minuts and rest 5 minuts. So simple. Try it out!",
  icon: (
   <>
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl: "https://github.com/AbdulxaqDev/react-pomidoro-clock",
  demoUrl: "https://abdulxaqdev.github.io/react-pomidoro-clock/",
  tech: ["React", "HTML", "CSS", "all"],
 },
 {
  number: 7,
  title: "react-drum-machine",
  imageUrl: drumMachine,
  description:
   "React drup-machine as web app. If you are fun of music, especially creating music with different sounds, you will like this app. Try it out!",
  icon: (
   <>
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl: "https://github.com/AbdulxaqDev/react-drum-machine-feecodecamp",
  demoUrl: "https://abdulxaqdev.github.io/react-drum-machine-feecodecamp/",
  tech: ["React", "HTML", "CSS", "all"],
 },
 {
  number: 8,
  title: "react-random-quotes",
  imageUrl: randomQuote,
  description:
   "React random quote generator web app. Implemented free Quote API. Visit the live app and gain knowledge on every click. It suggests amazing quotes by famous people, philosophers. Try it out!",
  icon: (
   <>
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl:
   "https://github.com/AbdulxaqDev/react-random-quote-machine-feecodecamp",
  demoUrl:
   "https://abdulxaqdev.github.io/react-random-quote-machine-feecodecamp/",
  tech: ["React", "HTML", "CSS", "all"],
 },
 {
  number: 9,
  title: "react-markdown",
  imageUrl: markdown,
  description:
   "Markdown react app, helps to write GitHub README.me with live preview. I use markdown API. Try it out!",
  icon: (
   <>
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl:
   "https://github.com/AbdulxaqDev/react-markdown-previewer-feecodecamp",
  demoUrl:
   "https://abdulxaqdev.github.io/react-markdown-previewer-feecodecamp/",
  tech: ["React", "HTML", "CSS", "all"],
 },
 {
  number: 10,
  title: "nodejs-react-fullstack",
  imageUrl: adminPanel,
  description:
   "This is an Admin panel, which is full-stack app build with Nodejs, Express, MondoDB, RestAPI, and React. Its main functionality is CRUD (Create, Read, Update and Delete). When you enter the admin panel it requires to signup and you will have rights to delete, block and unblock other admin or multiple admins at once ",
  icon: (
   <>
    <NodeIcon />
    <MongoDBIcon check={true} />
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl: "https://github.com/AbdulxaqDev/t4",
  demoUrl: "https://abdulkhakt4.herokuapp.com/",
  tech: ["Nodejs", "React", "HTML", "CSS", "MongoDB", "all"],
 },
 {
  number: 11,
  title: "nodejs-react-fullstack",
  imageUrl: gmail,
  description:
   "Messaging web app it is a bit similar to gmail, which is full-stack app build with Nodejs, Express, MondoDB, RestAPI, Socketio and React. You can send mail to anyone who registered to this app. When you sear recipient it shows suggession and similar user on dropdown with filtering. You are notified, if someone sends you message or vide versa. Sometimes it requres refresh the page, not updating suddenly. I am working on it. Try it out!",
  icon: (
   <>
    <NodeIcon />
    <MongoDBIcon check={true} />
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl: "https://github.com/AbdulxaqDev/t5",
  demoUrl: "https://abdulkhakt5.herokuapp.com",
  tech: ["Nodejs", "React", "HTML", "CSS", "MongoDB", "all"],
 },
 {
  number: 12,
  title: "nodejs-react-fullstack",
  imageUrl: fakeDataGenerator,
  description:
   "Fake data generator based seed number and you can control the data quality that how much it is similar to rear data. This is full-stack app build with Nodejs, Express, FakerJs API and React. You can get unlimited fake data based on country. As you scroll down, it will generate extra fake and unrepeatable data. Plus you can download the data as CSV(Comma Separated Values) file",
  icon: (
   <>
    <NodeIcon />
    <ReactIcon />
    <HtmlIcon />
    <CssIcon />
   </>
  ),
  sourceUrl: "https://github.com/AbdulxaqDev/t6",
  demoUrl: "https://abdulkhakt6.herokuapp.com/",
  tech: ["Nodejs", "React", "HTML", "CSS", "MongoDB", "all"],
 },
];

export default function Projects() {
 const [usedTechs, setUsedTechs] = useState(["all"]);

 const addTechTitle = (tech: string) => {
  let techs = [...usedTechs];
  if (techs.includes("all")) {
   techs.splice(techs.indexOf("all"), 1);
  }
  setUsedTechs([...techs, tech]);
 };

 const removeTechTitle = (tech: string) => {
  let techs = [...usedTechs];
  techs.splice(techs.indexOf(tech), 1);
  if (!techs.includes("all") && techs.length === 0) {
   techs = ["all"];
  }
  setUsedTechs([...techs]);
 };

 return (
  <Layout
   styles={{
    borderLeft: "1px solid #1e2d3d",
    borderRight: "1px solid #1e2d3d",
   }}
   title="projects"
  >
   <div className={classes.projects}>
    <AboutmeSideBar>
     <DropDown
      areProjects={true}
      styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
      label={labelProjects}
      titlesProjects={projectsTitles}
      setInfoLabel={setUsedTechs}
      isProjects={true}
      addTechTitle={addTechTitle}
      removeTechTitle={removeTechTitle}
     ></DropDown>
    </AboutmeSideBar>
    <AboutmeShowcase title={`projects: ${usedTechs}`} areProjects={true}>
     {projectsData
      .filter((project) => project.tech.some((tag) => usedTechs.includes(tag)))
      .map((project, i) => (
       <ProjectCard
        key={i}
        number={project.number}
        title={project.title}
        imageUrl={project.imageUrl}
        description={project.description}
        icon={project.icon}
        sourseUrl={project.sourceUrl}
        demoUrl={project.demoUrl}
       />
      ))}
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
