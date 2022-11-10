import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout";
import Animation from "../components/animation/animation";
import classes from "./index.module.css"


export default function Home() {
 return (
   <Layout title="hello">
    <h2>hello</h2>
    <Animation />
    <div className={classes.blur}></div>
   </Layout>
 );
}
