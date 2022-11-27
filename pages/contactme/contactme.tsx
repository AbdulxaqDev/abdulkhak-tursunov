import React, { useEffect, useState } from "react";
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
type input = (text: string) => void;
export default function Contactme() {
 const [isSent, setIsSent] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const sendMessage = () => {
  if (
   name === "" ||
   email === "" ||
   !email.includes(".") ||
   !email.includes("@") ||
   message === ""
  ) {
   alert("Please fill the all fields properly.");
  } else {
   console.log({ message: { name: name, email: email, message: message } });
   const myMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}%0ADate: ${new Date()}`;
   const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${myMessage}`;
   const api = new XMLHttpRequest();
   api.open("GET", url, true);
   api.send();
   setIsSent(true);
  }
 };

 useEffect(() => {
  if (!isSent) {
   setName("");
   setEmail("");
   setMessage("");
  }
 }, [isSent]);

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
    <AboutmeInfo infoLabel={"contacts"}>
     <Form
      sendMessage={sendMessage}
      isSent={isSent}
      setIsSent={setIsSent}
      setName={setName}
      setEmail={setEmail}
      setMessage={setMessage}
     />
    </AboutmeInfo>
    <AboutmeShowcase title="">
     <FormShowCase name={name} email={email} message={message} />
    </AboutmeShowcase>
   </div>
  </Layout>
 );
}
