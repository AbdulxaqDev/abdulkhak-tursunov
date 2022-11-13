import React, { useState } from "react";
import {
 ArrowBottomIcon,
 ArrowLeftIcon,
 ArrowRightIcon,
 ArrowTopIcon,
 SnakeFoodIcon,
 SnakeFoodInactiveIcon,
} from "../../../public/images/icons";
import Buttons from "../buttons/buttons";
import classes from "./snakeGameBoard.module.css";

type children = JSX.Element[] | JSX.Element;

export default function SnakeGameBoard({
 children,
 foods,
 isStarted,
 gameCondition,
 startGame,
}: {
 children: children;
 foods: number[];
 isStarted: boolean;
 gameCondition: string;
 startGame: () => void;
}) {
 return (
  <div className={classes.snakeGameBoard}>
   {children}
   <div className={classes.description}>
    <GameDes />
    <SnakeFoods foods={foods} />
   </div>
   <SkrewButton coordinate={[3, 3]} />
   <SkrewButton coordinate={[93, 3]} />
   <SkrewButton coordinate={[93, 93]} />
   <SkrewButton coordinate={[3, 93]} />
   <Buttons
    startGame={startGame}
    gameCondition={gameCondition}
    coords={[32, 300]}
    isGameStarted={isStarted}
   />
   <SkipBtn/>
  </div>
 );
}

const SkrewButton = ({ coordinate }: { coordinate: number[] }) => (
 <div
  style={{ left: coordinate[0] + "%", top: coordinate[1] + "%" }}
  className={classes.skrewBtn}
 >
  <ScrewBtnX />
 </div>
);

const ScrewBtnX = () => (
 <svg width={7} height={6} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.46 5.566 6 .976m-5.54 0L6 5.566" stroke="#114944" />
 </svg>
);

const GameDes = () => (
 <div className={classes.gameDes}>
  <div>
   <p>// use keyboard</p>
   <p>// arrows to play</p>
  </div>
  <div>
   <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
   >
    <div className={classes.arrowWrapper}>
     <ArrowTopIcon margin="0" />
    </div>
   </div>
   <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
   >
    <div className={classes.arrowWrapper}>
     <ArrowLeftIcon margin="0" />
    </div>
    <div className={classes.arrowWrapper}>
     <ArrowBottomIcon margin="0" />
    </div>
    <div className={classes.arrowWrapper}>
     <ArrowRightIcon margin="0" />
    </div>
   </div>
  </div>
 </div>
);

const SnakeFoods = ({ foods }: { foods: number[] }) => (
 <div className={classes.snakeFoods}>
  <div>
   <p>// food left</p>
  </div>
  <div className={classes.foods}>
   <div>
    {foods.map((food, i) =>
     food ? (
      <SnakeFoodIcon key={i} isInGame={false} margin="2px" />
     ) : (
      <SnakeFoodInactiveIcon key={i} margin="2px" />
     )
    )}
   </div>
  </div>
 </div>
);

const SkipBtn = () => <button className={classes.skipBtn} >skip</button>;
