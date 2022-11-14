import React from "react";
import Layout from "../../components/layout/layout";
import AboutmeSideNav from "../../components/aboutmeSideNav/aboutmeSideNav";
import AboutmeSideBar from "../../components/aboutmeSideBar/aboutmeSideBar";
import AboutmeInfo from "../../components/aboutmeInfo/aboutmeInfo";
import AboutmeShowcase from "../../components/aboutmeShowcase/aboutmeShowcase";

import classes from "./aboutme.module.css";

const styles = {
 height: undefined,
};

export default function Aboutme() {
 return (
  <Layout title="aboutme" styles={styles}>
   <div className={classes.aboutme}>
    <AboutmeSideNav />
    <AboutmeSideBar />
    <AboutmeInfo />
    <AboutmeShowcase />
   </div>
  </Layout>
 );
}
