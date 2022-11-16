import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import AboutmeSideNav from "../../components/aboutmeSideNav/aboutmeSideNav";
import AboutmeSideBar from "../../components/aboutmeSideBar/aboutmeSideBar";
import AboutmeInfo from "../../components/aboutmeInfo/aboutmeInfo";
import AboutmeShowcase from "../../components/aboutmeShowcase/aboutmeShowcase";

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


export default function Aboutme() {
 const [abotmeText, setAboutmeText] = useState(aboutText);
 const [infoLabel, setInfoLabel] = useState("personal-info");

 return (
  <Layout title="aboutme" styles={styles}>
   <div className={classes.aboutme}>
    <AboutmeSideNav />
    <AboutmeSideBar setInfoLabel={setInfoLabel} />
    <AboutmeInfo
     abotmeText={abotmeText}
     setAboutmeText={setAboutmeText}
     infoLabel={infoLabel}
    />
    <AboutmeShowcase />
   </div>
  </Layout>
 );
}
