import React, { useEffect, useState } from "react";
import classes from "./snakegame.module.css";
import Snake from "./snake/snake";
import SnakeFood from "./snakeFood/snakeFood";

const getRandomCoordinates = () => {
 let min = 1;
 let max = 98;
 let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
 let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
 return [x, y];
};

const initialSnakeState = {
 food: getRandomCoordinates(),
 speed: 2000,
 direction: "RIGHT",
 snakeDots: [
  [0, 0],
  [2, 0],
  [4, 0],
 ],
};

export default function SnakeGame() {
 const [snakeDots, setSnakeDots] = useState(initialSnakeState);
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
    head = [head[0], head[1] + 2];
    break;
   case "UP":
    head = [head[0], head[1] - 2];
    break;
  }

  dots.push(head);
  dots.shift();
  setSnakeDots((pre) => ({ ...pre, snakeDots: [...dots] }));
 };

 const gameOver = () => {
  alert(`Game Over Snake length is ${snakeDots.snakeDots.length}`);
  setSnakeDots(initialSnakeState);
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

 const checkIfEat = () => {
  let head = snakeDots.snakeDots[snakeDots.snakeDots.length - 1];
  let food = snakeDots.food;
  if (head[0] == food[1] && head[1] == food[0]) {
   setSnakeDots((pre) => ({
    ...pre,
    food: getRandomCoordinates(),
   }));
   enlargeSnake();
   increaseSpeed();
   console.log("Eating the food");
  }
  console.log(`Food X: ${food[0]}, Y: ${food[1]}`);
  console.log(`Head X: ${head[0]}, Y: ${head[1]}`);
  
 };

 useEffect(() => {
  const interval = setInterval(moveSnake, snakeDots.speed);
  document.onkeydown = onKeyDown;

  checkIfOutOfBorders();
  checkIfCollapsed();
  checkIfEat();

  return () => clearInterval(interval);
 }, [snakeDots]);

 return (
  <div className={classes.gameArea}>
   <Snake snakeDots={snakeDots.snakeDots} />
   <SnakeFood dot={snakeDots.food} />
   {/* <button onClick={moveSnake} >Hell</button> */}
  </div>
 );
}
