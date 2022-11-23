import React from "react";
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
 const formText = `
 const button = document.querySelector('#sendBtn');

 const message = {
  name: "Jonathan Davis",
  email: "jonathan-davis@gmail.com",
  message: "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!",
  date: "Thu 21 Apr"
 }

 button.addEventListener('click', () => {
  form.send(message);
 })
 `;

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
     <Form />
    </AboutmeInfo>
    <AboutmeShowcase title="">
     <FormShowCase />
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
