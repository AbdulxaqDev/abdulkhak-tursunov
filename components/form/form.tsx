import React, { useState } from "react";
import Thankyou from "../thankyou/thankyou";

import classes from "./form.module.css";

export default function Form() {
 const [isSent, setIsSent] = useState(false);

 return (
  <div className={classes.form}>
   {isSent ? (
    <Thankyou setIsSent={setIsSent} />
   ) : (
    <>
     <h1>_name:</h1>
     <input type="text" />
     <h1>_email:</h1>
     <input type="text" />
     <h1>_message:</h1>
     <textarea />
     <h1>
      <button onClick={() => setIsSent(true)} >submit-message</button>
     </h1>
    </>
   )}
  </div>
 );
}
