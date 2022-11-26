import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import AboutmeSideBar from "../../components/aboutmeSideBar/aboutmeSideBar";
import DropDown from "../../components/dropDown/dropDown";
import AboutmeInfo from "../../components/aboutmeInfo/aboutmeInfo";
import AboutmeShowcase from "../../components/aboutmeShowcase/aboutmeShowcase";
import FormShowCase from "../../components/formShowCase/formShowCase";
import Form from "../../components/form/form";
import {
 ArrowRightIcon,
 MailIcon,
 PhoneIcon,
 LinkIcon,
} from "../../public/images/icons";

import classes from "./contactme.module.css";
import CodeShowCase from "../../components/codeShowCase/codeShowCase";

const contactLabel = {
 name: "contacts",
 iconMain: <ArrowRightIcon margin="10px 10px 10px 14px" />,
 iconSecondary: undefined,
};

const findMeLabel = {
 name: "find-me-also-in",
 iconMain: <ArrowRightIcon margin="10px 10px 10px 14px" />,
 iconSecondary: undefined,
};

const contactTitles = [
 {
  Icon: <MailIcon margin="10px 0px 10px 19px" />,
  name: "click & copy email",
 },
 {
  Icon: <PhoneIcon margin="10px 10px 10px 29px" />,
  name: "+998993933028",
 },
];

const findMeTitles = [
 {
  Icon: <LinkIcon margin="10px 10px 10px 29px" />,
  name: "Telegram",
  socialLink: "https://t.me/abdulkhak_tursunov",
 },
 {
  Icon: <LinkIcon margin="10px 10px 10px 29px" />,
  name: "Linkedin",
  socialLink: "https://www.linkedin.com/in/abdulkhak-tursunov-a64221173/",
 },
 {
  Icon: <LinkIcon margin="10px 10px 10px 29px" />,
  name: "Facebook",
  socialLink: "https://www.facebook.com/abdulxaq.tursunov",
 },
];

export default function Contactme() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 return (
  <Layout styles={undefined} title="contactme">
   <div className={classes.contactme}>
    <AboutmeSideBar>
     <DropDown
      label={contactLabel}
      styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
      titles={contactTitles}
     ></DropDown>
     <DropDown
      areSocials={true}
      label={findMeLabel}
      styles={{ borderBottom: "1px solid #1e2d3d", height: 40 }}
      titles={findMeTitles}
     ></DropDown>
    </AboutmeSideBar>
    <AboutmeInfo setAboutmeText={() => {}} infoLabel={"contacts"}>
     <Form setName={setName} setEmail={setEmail} setMessage={setMessage} />
    </AboutmeInfo>
    <AboutmeShowcase title="">
     <FormShowCase name={name} email={email} message={message} />
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
