import { useState } from "react";
import SquareComp from "./SquareComp";

const initialState = ["", "", "", "", "", "", "", "", ""];

const Board = () => {
  const [gameState, setGameState] = useState(initialState);
  const [isXTurn, setIsXTurn] = useState(true);

  const onSquareClick = (index) => {
    let newArray = Array.from(gameState);
    newArray[index] = isXTurn ? "X" : "O";
    setGameState(newArray);
    setIsXTurn(!isXTurn);
  };

  function checkWinner(gameState) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  }
  const winner = checkWinner(gameState);

  return (
    <div className="flex flex-col">
      {winner && (
        <span className="bg-green-500">{winner} Has Won The Game !</span>
      )}
      <div className="flex">
        <SquareComp value={gameState[0]} onClick={() => onSquareClick(0)} />
        <SquareComp value={gameState[1]} onClick={() => onSquareClick(1)} />
        <SquareComp value={gameState[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className="flex">
        <SquareComp value={gameState[3]} onClick={() => onSquareClick(3)} />
        <SquareComp value={gameState[4]} onClick={() => onSquareClick(4)} />
        <SquareComp value={gameState[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className="flex ">
        <SquareComp value={gameState[6]} onClick={() => onSquareClick(6)} />
        <SquareComp value={gameState[7]} onClick={() => onSquareClick(7)} />
        <SquareComp value={gameState[8]} onClick={() => onSquareClick(8)} />
      </div>
      <button
        className="bg-yellow-500 mt-2 border-indigo-500 border-2"
        onClick={() => {
          setGameState(initialState);
          setIsXTurn(true);
        }}
      >
        Clear Game
      </button>
    </div>
  );
};
export default Board;
