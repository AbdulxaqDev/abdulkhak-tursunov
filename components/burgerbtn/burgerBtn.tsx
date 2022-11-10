import React from "react";
import classes from "./burgerBtn.module.css";

export default function BurgerBtn({ ChangeNav }: { ChangeNav: () => void }) {
 return (
  <div>
   <label className={classes.toggle}>
    <input onClick={ChangeNav} type="checkbox"></input>
    <div>
     <div>
      <span></span>
      <span></span>
     </div>
     <svg>
      <use xlinkHref="#path"></use>
     </svg>
     <svg>
      <use xlinkHref="#path"></use>
     </svg>
    </div>
   </label>

   <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="path">
     <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
    </symbol>
   </svg>
  </div>
 );
}
