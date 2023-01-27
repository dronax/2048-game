import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import "./style.css";
import Block from "./Block";
import cloneDeep from "lodash.clonedeep";

const Board = () => {
  const data = useSelector((state) => state?.grid);
  const dispatch=useDispatch()
  const swipeLeft = (dummy) => {
    console.log("swipe left");
    let oldGrid = data;
    let newArray = cloneDeep(data);

    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast++;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            b[fast] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
    }
    if (dummy) {
      return newArray;
    } else {
      dispatch({type:'left',payload:newArray});
    }
  };
  const addNumber=(newGrid)=>{
    let added=false
    let gridFull=false
    let attempts=0;
    while(!added){
      if(gridFull){
        break;
      }
      let rand1=Math.floor(Math.random()*4)
      let rand2=Math.floor(Math.random()*4);
      attempts++;
      if(newGrid[rand1][rand2]===0){
        newGrid[rand1][rand2]=Math.random()>0.5?2:4;
        added=true;
      }
      // if(attempts>50){
      //   gridFull=true;
      //   let gameOver=checkIfGameover();
      //   if(gamemover){
      //     alert("game over");
      //   }
      // }
    } 
  }
  const initialize=()=>{
    console.log("Real",data)
    let newGrid = cloneDeep(data);
    console.log("New",newGrid);
    addNumber(newGrid);
    // console.table(newGrid);
    addNumber(newGrid);
    // console.table(newGrid);
    dispatch({
      type:"add",
      payload:newGrid

    })
  };
  useEffect(()=>{
    initialize()
  },[])
  return (
    <div className="board">
      {data.map((row, oneIndex) => {
        return (
          <div style={{ display: "flex" }} key={oneIndex}>
            {row.map((digit, index) =>(
              <Block num={digit} key={index} />
      ))}
          </div>
        );
      })}
    </div>
  );
}


export default Board;
