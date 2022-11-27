import React, { useState } from "react";
import Thankyou from "../thankyou/thankyou";

import classes from "./form.module.css";

type input = (text: string) => void;

export default function Form({
 setName,
 setEmail,
 setMessage,
 isSent,
 setIsSent,
 sendMessage,
}: {
 setName: input;
 setEmail: input;
 setMessage: input;
 isSent: boolean;
 setIsSent: (arg: boolean) => void;
 sendMessage: () => void;
}) {
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
      <button
       onClick={() => {
        sendMessage();
       }}
      >
       submit-message
      </button>
     </h1>
    </>
   )}
  </div>
 );
}
