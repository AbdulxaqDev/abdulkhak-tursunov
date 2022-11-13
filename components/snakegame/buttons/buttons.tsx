import React from "react";
import classes from "./buttons.module.css";

export default function Buttons({
 gameCondition,
 coords,
 isGameStarted,
 startGame,
}: {
 gameCondition: string;
 coords: number[];
 isGameStarted: boolean;
 startGame: () => void;
}) {
 return (
  <div className={classes.label} style={{ top: coords[1], left: coords[0] }}>
   {!isGameStarted ? (
    <button onClick={startGame}>start-game</button>
   ) : gameCondition === "lose" ? (
    <>
     <h3>GAME OVER!</h3>
     <p onClick={startGame}>start-again</p>
    </>
   ) : gameCondition === "win" ? (
    <>
     <h3>WELL DONE!</h3>
     <p onClick={startGame}>play-again</p>
    </>
   ) : (
    <div style={{ display: "none" }}></div>
   )}
  </div>
 );
}


