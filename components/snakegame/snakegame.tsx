import React, { useEffect, useState } from "react";
import classes from "./snakegame.module.css";
import Snake from "./snake/snake";
import SnakeFood from "./snakeFood/snakeFood";
import SnakeGameBoard from "./snakeGameBoard/snakeGameBoard";

const getRandomCoordinates = () => {
 let min = 1;
 let max = 98;
 let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
 let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
 return [x, y];
};

const initialSnakeState = {
 food: getRandomCoordinates(),
 speed: 150,
 direction: "RIGHT",
 snakeDots: [
  [64, 59],
  [64, 58],
  [64, 57],
  [64, 56],
  [64, 55],
  [64, 54],
  [64, 53],
  [64, 52],
  [64, 51],
  [62, 51],
  [60, 51],
  [58, 51],
  [56, 51],
  [54, 51],
  [52, 51],
  [50, 51],
  [48, 51],
  [46, 51],
  [46, 50],
  [46, 49],
  [46, 48],
  [46, 47],
  [46, 46],
  [46, 45],
  [46, 44],
  [46, 43],
  [46, 42],
  [46, 41],
  [46, 40],
  [46, 39],
  [46, 38],
  [46, 37],
  [46, 36],
  [46, 35],
 ],
};

const initialFood = new Array(10).fill(0);




export default function SnakeGame() {
 const [snakeDots, setSnakeDots] = useState(initialSnakeState);
 const [foods, setFoods] = useState(initialFood);
 const [isStarted, setIsStarted] = useState(false);
 const [gameCondition, setGameCondition] = useState("playing");
 const [isPlaying, setIsPlaying] = useState(false);

 const startGame = () => {
  setIsStarted(true);
  setGameCondition("playing");
  setIsPlaying(true);
  setFoods(initialFood);
 };

 const onKeyDown = (e: any) => {
  e = e || window.event;
  switch (e.keyCode) {
   case 38:
    setSnakeDots((pre) => ({
     ...pre,
     direction: "UP",
    }));
    break;
   case 40:
    setSnakeDots((pre) => ({
     ...pre,
     direction: "DOWN",
    }));
    break;
   case 37:
    setSnakeDots((pre) => ({
     ...pre,
     direction: "LEFT",
    }));
    break;
   case 39:
    setSnakeDots((pre) => ({
     ...pre,
     direction: "RIGHT",
    }));
    break;
  }
 };

 const moveSnake = () => {
  if (isPlaying) {
   let dots = [...snakeDots.snakeDots];
   let head = dots[dots.length - 1];
   switch (snakeDots.direction) {
    case "RIGHT":
     head = [head[0] + 2, head[1]];
     break;
    case "LEFT":
     head = [head[0] - 2, head[1]];
     break;
    case "DOWN":
     head = [head[0], head[1] + 1];
     break;
    case "UP":
     head = [head[0], head[1] - 1];
     break;
   }

   dots.push(head);
   dots.shift();
   setSnakeDots((pre) => ({ ...pre, snakeDots: [...dots] }));
  }
 };

 const gameOver = () => {
  setSnakeDots(initialSnakeState);
  setFoods(initialFood);
  setGameCondition("lose");
  setIsPlaying(false);
 };

 const checkIfOutOfBorders = () => {
  let head = snakeDots.snakeDots[snakeDots.snakeDots.length - 1];
  if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
   gameOver();
  }
 };

 const checkIfCollapsed = () => {
  let snake = [...snakeDots.snakeDots];
  let head = snake[snake.length - 1];
  snake.pop();
  snake.forEach((dot) => {
   if (head[0] == dot[0] && head[1] == dot[1]) {
    gameOver();
   }
  });
 };

 const enlargeSnake = () => {
  let newSnake = [...snakeDots.snakeDots];
  newSnake.unshift([]);
  setSnakeDots((pre) => ({
   ...pre,
   snakeDots: newSnake,
  }));
 };

 const increaseSpeed = () => {
  if (snakeDots.speed > 10) {
   setSnakeDots((pre) => ({
    ...pre,
    speed: snakeDots.speed - 10,
   }));
  }
 };

 const gameWin = () => {
  setGameCondition("win");
  setIsPlaying(false);
 };

 const eatFood = () => {
  if (foods.includes(0)) {
   const newFoods = [...foods];
   newFoods.pop();
   newFoods.unshift(1);
   setFoods((pre) => [...newFoods]);
  } else {
   gameWin();
   setFoods(initialFood);
  }
 };

 const checkIfEat = () => {
  let head = snakeDots.snakeDots[snakeDots.snakeDots.length - 1];
  let food = snakeDots.food;
  if (
   food[1] - 6 < head[1] &&
   food[1] + 6 > head[1] &&
   food[0] - 4 < head[0] &&
   food[0] + 4 > head[0]
  ) {
   setSnakeDots((pre) => ({
    ...pre,
    food: getRandomCoordinates(),
   }));
   enlargeSnake();
   increaseSpeed();
   eatFood();
  }
 };

 useEffect(() => {
  const interval = setInterval(moveSnake, snakeDots.speed);
  document.onkeydown = onKeyDown;

  checkIfOutOfBorders();
  checkIfCollapsed();
  checkIfEat();

  return () => clearInterval(interval);
 }, [snakeDots, snakeDots.food, isStarted, gameCondition]);

 return (
  <SnakeGameBoard
   foods={foods}
   isStarted={isStarted}
   gameCondition={gameCondition}
   startGame={startGame}
  >
   <div className={classes.gameArea}>
    <Snake snakeDots={snakeDots.snakeDots} direction={snakeDots.direction} />
    <SnakeFood dot={snakeDots.food} />
   </div>
  </SnakeGameBoard>
 );
}
