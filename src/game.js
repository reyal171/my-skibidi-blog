import React, { useState } from "react";
import rockphoto from "./rockstockimage.jpg";
import paperphoto from "./paperstockimage.jpg";
import scissorsphoto from "./scissorsstockimage.jpg";

export default function RPSGame() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const choices = ["Rock", "Paper", "Scissors"];
  const [wins, setWins] = useState(0); // starting at 0
  const [ties, setTies] = useState(0); // starting at 0
  const [losses, setLosses] = useState(0); // starting at 0

  function getImage(choice) {
    if (choice === "Rock") return rockphoto;
    if (choice === "Paper") return paperphoto;
    if (choice === "Scissors") return scissorsphoto;
    return null;
  }


  function play(choice) {
    setUserChoice(choice);
    const comp = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("u draw!");
      setTies(ties + 1)
    }
    else if (
      (choice === "Rock" && comp === "Scissors") ||
      (choice === "Paper" && comp === "Rock") ||
      (choice === "Scissors" && comp === "Paper")
    ) {
      setResult("🎉 you winner");
      setWins(wins + 1)
    }
    else {
      setResult("❌ you loose :c");
      setLosses(losses + 1)
    }
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Comic Relief", backgroundColor: '	#C88A65'}}>
      <h1>very simple rock paper scissor game for now</h1>
      <p>Wins: {wins} Ties: {ties} Losses: {losses}</p>
      {choices.map((c) => (
        <button key={c} onClick={() => play(c)}>{c}</button>
      ))}
      <p>You chose: {userChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <h2>{result}</h2>
      <img src={getImage(userChoice)} width="670" height="251"/>
      <p>You chose: {userChoice}</p>
      <img src={getImage(computerChoice)} width="670" height="251"/>
      <p>Computer chose: {computerChoice}</p>
    </div>
  );
}
