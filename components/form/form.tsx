import React, { useState } from "react";
import Thankyou from "../thankyou/thankyou";

import classes from "./form.module.css";

type input = (text: string) => void;

export default function Form({
 setName,
 setEmail,
 setMessage,
}: {
 setName: input;
 setEmail: input;
 setMessage: input;
}) {
 const [isSent, setIsSent] = useState(false);

 return (
  <div className={classes.form}>
   {isSent ? (
    <Thankyou setIsSent={setIsSent} />
   ) : (
    <>
     <h1>_name:</h1>
     <input type="text" onChange={(e) => setName(e.target.value)} />
     <h1>_email:</h1>
     <input type="text" onChange={(e) => setEmail(e.target.value)} />
     <h1>_message:</h1>
     <textarea onChange={(e) => setMessage(e.target.value)} />
     <h1>
      <button onClick={() => setIsSent(true)}>submit-message</button>
     </h1>
    </>
   )}
  </div>
 );
}
