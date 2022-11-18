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

import classes from "./projects.module.css";

let labelProjects = {
 name: "projects",
 iconMain: <ArrowRightIcon margin="10px 10px 10px 14px" />,
 iconSecondary: undefined,
};

let projectsTitles = [
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

export default function Projects() {
 const [usedTechs, setUsedTechs] = useState(["React", "Vue"]);

 const addTechTitle = (tech: string) => {
  setUsedTechs((pre) => [...pre, tech]);
 };

 const removeTechTitle = (tech: string) => {
  const techs = [...usedTechs];
  techs.splice(techs.indexOf(tech), 1);
  setUsedTechs((pre) => [...techs]);
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
      styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
      label={labelProjects}
      titlesProjects={projectsTitles}
      setInfoLabel={setUsedTechs}
      isProjects={true}
     ></DropDown>
    </AboutmeSideBar>
    <AboutmeShowcase title={`projects: ${usedTechs}`} areProjects={true}>
     <ProjectCard
      number={1}
      title={"react-calculator"}
      imageUrl={reactCalculator}
      description={
       "Simple react calculator with soft UI. Comforts the user with its soft design and UX. Try it out!"
      }
      icon={<ReactIcon />}
      sourseUrl={
       "https://github.com/AbdulxaqDev/react-javascript-calculator-freecodecamp"
      }
      demoUrl={
       "https://abdulxaqdev.github.io/react-javascript-calculator-freecodecamp/"
      }
     />
     <ProjectCard
      number={1}
      title={"react-calculator"}
      imageUrl={reactCalculator}
      description={
       "Simple react calculator with soft UI. Comforts the user with its soft design and UX. Try it out!"
      }
      icon={<ReactIcon />}
      sourseUrl={
       "https://github.com/AbdulxaqDev/react-javascript-calculator-freecodecamp"
      }
      demoUrl={
       "https://abdulxaqdev.github.io/react-javascript-calculator-freecodecamp/"
      }
     />
     <ProjectCard
      number={1}
      title={"react-calculator"}
      imageUrl={reactCalculator}
      description={
       "Simple react calculator with soft UI. Comforts the user with its soft design and UX. Try it out!"
      }
      icon={<ReactIcon />}
      sourseUrl={
       "https://github.com/AbdulxaqDev/react-javascript-calculator-freecodecamp"
      }
      demoUrl={
       "https://abdulxaqdev.github.io/react-javascript-calculator-freecodecamp/"
      }
     />
     <ProjectCard
      number={1}
      title={"react-calculator"}
      imageUrl={reactCalculator}
      description={
       "Simple react calculator with soft UI. Comforts the user with its soft design and UX. Try it out!"
      }
      icon={<ReactIcon />}
      sourseUrl={
       "https://github.com/AbdulxaqDev/react-javascript-calculator-freecodecamp"
      }
      demoUrl={
       "https://abdulxaqdev.github.io/react-javascript-calculator-freecodecamp/"
      }
     />
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
