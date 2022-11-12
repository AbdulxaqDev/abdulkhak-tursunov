import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout";
import Animation from "../components/animation/animation";
import classes from "./index.module.css";
import SnakeGame from "../components/snakegame/snakegame";

const styles = {
 height: undefined,
};

export default function Home() {
 return (
  <Layout title="hello" styles={styles}>
   <Animation />
   <div className={classes.blur}></div>
   <div className={classes.mainContent}>
    <h2>hedddddddddddddllo</h2>
    
    <SnakeGame/>
   </div>
  </Layout>
 );
}
