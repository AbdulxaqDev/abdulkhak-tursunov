import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classes from "./layout.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

export const siteTitle = "Abdulkhak Tursunov's portfolio";

type layoutProps = {
 title: string;
 children: JSX.Element[] | JSX.Element;
 styles: {} | undefined
};

const Layout: React.FC<layoutProps> = ({ children, title, styles }) => {
 return (
  <div className={classes.layout} >
   <Head>
    <title>_{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="Abdulkhak Tursunov's portfolio website" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
     property="og:image"
     content={`https://og-image.vercel.app/${encodeURI(
      siteTitle
     )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
   </Head>
   <Header pagetitle={title} />
   <main style={styles}>
    <h1 className={classes.title} >_{title}</h1>
    {children}
   </main>
   <Footer />
  </div>
 );
};

export default Layout;
