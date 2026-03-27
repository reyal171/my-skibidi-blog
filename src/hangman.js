import React, { useState } from "react";
import hangmanbg from "./hungman.png"
const bank = ["cat", "pseudopseudohypoparathyroidism", "cryptic", "xylophones", "glyph", "hymn", "rhythm", "jazzy", "kayak", "galvanized", "voyeurism", "yachtsman", "crwth", "kazoo", "daiquiri", "megahertz", "espionage", "larynx", "thriftless", "the purple monkey dishwasher sang opera to the confused giraffe who was trying to find his lost sock in the cereal box while a flock of flamingos debated the merits of abstract art and the cheese whispered secrets to the moon", "floccinaucinihilipilification", "hydrochlorofluorocarbon", "read", "jump", "banana", "the quick brown fox jumps over the lazy dog", "waqfs", "vozhd"]
let daword = bank[Math.floor(Math.random() * bank.length)]
const hangmanStages = [
  `

  _______
  |/    |
  |
  |
  |
  |
  |
  `,
  `
  _______
  |/    |
  |     O
  |
  |
  |
  |
  `,
  `
  _______
  |/    |
  |     O
  |     |
  |
  |
  |
  `,
  `
  _______
  |/    |
  |     O
  |    /|
  |
  |
  |
  `,
  `
  _______
  |/    |
  |     O
  |    /|\\
  |
  |
  |
  `,
  `
  _______
  |/    |
  |     O
  |    /|\\
  |    /
  |
  |
  `,
  `
  _______
  |/    |
  |     O
  |    /|\\
  |    / \\
  |
  |
  `
];

export default function Hangman() {

    const [Allguesses , setAllguesses] = useState([]);
    const [Wrongguesses , setWrongguesses] = useState([]);
    const [Result ,  setResult] =useState("");
    const [lives, setLives] = useState(6);
    const isLoser = lives == 0;
    

    function handleGuess(letter) {
        if (Allguesses.includes(letter)) return; // skip if already guessed
        if (!daword.includes(letter)) {

            setWrongguesses([...Wrongguesses, letter]);
            setLives(lives - 1)
            
        }
        setAllguesses([...Allguesses, letter]);
        
    }

    function resetGame() {
        setLives(6)
        setWrongguesses([])
        setAllguesses([])
        daword = bank[Math.floor(Math.random() * bank.length)]
        
    }
        

    // Build display word with underscores
  const displayWord = daword
    .split("")
    .map((l) => (Allguesses.includes(l) ? l : "_"))
    .join(" ");
    const isWinner = !displayWord.includes("_");

    return (
        <div style={{ textAlign: "center", fontFamily: "Comic Relief", backgroundColor: 'red', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
            <h1 style={{marginBottom: "-30px"}}>easy hangman gameeeeeeeeee the blank button is a space</h1>
            <p>
                {/* {daword} */}
            </p>
            <p>
                {lives} lives
            </p>
            <p>
                {displayWord}
            </p>
            <p>
                {Wrongguesses}
            </p>
            <button 
                onClick={() => resetGame()}
                disabled={!isLoser && !isWinner}
            >
                restar
                
            </button>
          
                {isWinner && <h2>🎉 you Winnaer hurrah!</h2>}
        {isLoser && <h2>❌ you Looser! da word was {daword}</h2>}

            <pre style={{textAlign: "left"}}>
                {hangmanStages[6-lives]}   
            </pre>         

            <div>
          {"abcdefghijklmnopqrstuvwxyz ".split("").map((letter) => (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={Allguesses.includes(letter) || lives == 0}
              style={{ margin: "5px", padding: "5px 10px" }}
            >
              {letter}
            </button>
          ))}
          <img src={hangmanbg}></img>
          
        </div>
        </div> )
}