import React from "react";

import classes from "./thankyou.module.css";

export default function Thankyou({ setIsSent }: {setIsSent: (vlaue: boolean) => void}) {
 return (
  <div className={classes.thankyou}>
   <h3>Thank you! 👨‍💻</h3>
   <p>Your message has been accepted. You will recieve answer really soon!</p>
   <h4>
    <button onClick={() => setIsSent(false)}>send-new-message</button>
   </h4>
  </div>
 );
}
