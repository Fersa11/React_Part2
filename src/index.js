//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
//It should contain your random lucky number
//It should contain your name
import React from "react";
import ReactDom from "react-dom";

const fName = "Den";
const lName = "Say";
const luckyNumber = 3;
const currentDate = new Date();
//const currentDate = new Date(2022,6,1);
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";
const h1CustomStyle = {
  color: "green",
  fontSize: "20px",
  border: "1px solid black"
};
//console.log(currentDate);
h1CustomStyle.color = "blue";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="true">
      Hello My name is {fName} {lName}
    </h1>
    <h1 style={h1CustomStyle}>Hello My name is {fName + " " + lName}</h1>
    <h1>Hello My name is {`${fName} ${lName}`}</h1>
    <img
      className="food-img"
      src="https://cdn.yemek.com/mnresize/1250/833/uploads/2021/04/patlicanli-pilav-yemekcom.jpg"
      alt="my Picture1"
    ></img>
    <img
      className="food-img"
      src="https://asgul.com/wp-content/uploads/2021/03/en-kolay-sulu-yemek-tarifleri-herkesin-kesinlikle-bilmesi-gereken-pratik-yemekler-0-U2sTa7Fx.png"
      alt="kuru"
    ></img>
    <img className="food-img" src={img + "?grayscale"} alt="Lorem picsum"></img>
    <p> Your lucky number is {luckyNumber} </p>
    <p> Your lucky number is {Math.floor(Math.random() * 10)} </p>

    <ul>
      <li> first </li>
      <li> second </li>
      <li> third </li>
    </ul>

    <p>created by {fName + " " + lName}</p>
    <p>Copyright @ {year}</p>
  </div>,

  document.getElementById("root")
);
