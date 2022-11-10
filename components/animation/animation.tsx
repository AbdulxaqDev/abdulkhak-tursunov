import React from "react";
import classes from "./animation.module.css";

export default function Animation() {
 return (
  <div className={classes.animation}>
   <GreenCircle props={undefined} />
   <BlueCircle props={undefined} />
  </div>
 );
}

const GreenCircle = ({ ...props }: { props: any }) => (
 <svg
  className={classes.greenCircle}
  viewBox="0 0 1500 800"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
  width={500}
 >
  <path className="blob" fill="#207976" style={{ transform: "scale(3, 1.5)" }}>
   <animate
    attributeName="d"
    dur="3s"
    repeatCount="indefinite"
    values="M447.5,343.5Q399,437,299.5,453.5Q200,470,116.5,412.5Q33,355,34.5,251Q36,147,115.5,78Q195,9,295,38.5Q395,68,445.5,159Q496,250,447.5,343.5Z; M444.45256,345.53163Q402.04744,441.06326,300.51581,458.07117Q198.98419,475.07907,119.03954,413.51581Q39.09489,351.95256,42.62652,252.01581Q46.15815,152.07907,122.6107,88.66606Q199.06326,25.25304,300.58698,42.05535Q402.1107,58.85767,444.48419,154.42883Q486.85767,250,444.45256,345.53163Z; 
         M445,347.5Q406,445,301.5,462.5Q197,480,119,415.5Q41,351,41.5,250.5Q42,150,118.5,78.5Q195,7,299.5,32Q404,57,444,153.5Q484,250,445,347.5Z;
         M447.5,343.5Q399,437,299.5,453.5Q200,470,116.5,412.5Q33,355,34.5,251Q36,147,115.5,78Q195,9,295,38.5Q395,68,445.5,159Q496,250,447.5,343.5Z
         "
   ></animate>
  </path>
 </svg>
);

const BlueCircle = ({ ...props }: { props: any }) => (
 <svg
 className={classes.blueCircle}
  viewBox="0 0 1500 800"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
  width={500}
 >
  <path className="blob" fill="#254085" style={{ transform: "scale(3, 1.5)" }}>
   <animate
    attributeName="d"
    dur="3s"
    repeatCount="indefinite"
    values="M447.5,343.5Q399,437,299.5,453.5Q200,470,116.5,412.5Q33,355,34.5,251Q36,147,115.5,78Q195,9,295,38.5Q395,68,445.5,159Q496,250,447.5,343.5Z; M444.45256,345.53163Q402.04744,441.06326,300.51581,458.07117Q198.98419,475.07907,119.03954,413.51581Q39.09489,351.95256,42.62652,252.01581Q46.15815,152.07907,122.6107,88.66606Q199.06326,25.25304,300.58698,42.05535Q402.1107,58.85767,444.48419,154.42883Q486.85767,250,444.45256,345.53163Z; 
         M445,347.5Q406,445,301.5,462.5Q197,480,119,415.5Q41,351,41.5,250.5Q42,150,118.5,78.5Q195,7,299.5,32Q404,57,444,153.5Q484,250,445,347.5Z;
         M447.5,343.5Q399,437,299.5,453.5Q200,470,116.5,412.5Q33,355,34.5,251Q36,147,115.5,78Q195,9,295,38.5Q395,68,445.5,159Q496,250,447.5,343.5Z
         "
   ></animate>
  </path>
 </svg>
);
