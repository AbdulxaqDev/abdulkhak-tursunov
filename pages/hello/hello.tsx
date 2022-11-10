import React from "react";
import Layout from "../../components/layout/layout";
import Animation from "../../components/animation/animation";

import classes from "./hello.module.css";

export default function Hello() {
 return (
  <Layout title="hello">
   <h2>hello</h2>
   <Animation/>
   <div className={classes.blur}></div>
  </Layout>
 );
}
