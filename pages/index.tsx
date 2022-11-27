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
    <div className={classes.mainText}>
     <p className={classes.hi}>Hi all. I am</p>
     <h3 className={classes.name}>Abdulkhak Tursunov</h3>
     <h4 className={classes.job}>&gt; Front-end and mobile developer</h4>
     <p className={classes.comment}>&#47;&#47; complete the game to continue</p>
     <p className={classes.comment2}>&#47;&#47; find my profile on Github:</p>
     <p className={classes.comment}>&#47;&#47; you can also see it on my Github page</p>
     <p className={classes.script}>
      <span className={classes.const}>const</span>
      <span className={classes.variableName}>githubLink</span> =
      <a href="https://github.com/AbdulxaqDev" target="_blank"  rel="noreferrer">
       “<span className={classes.link}>https://<br className={classes.break} />github.com/AbdulxaqDev</span>”
      </a>
     </p>
    </div>
    <SnakeGame />
   </div>
  </Layout>
 );
}
