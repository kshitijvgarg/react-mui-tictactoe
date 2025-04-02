import { Button } from "@mui/material";
import React, { useState } from "react";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const playerX = currentMove % 2 === 0;
  const board = history[currentMove];

  function handlePlay(newBoard) {
    const nextHistory = [...history.slice(0, currentMove + 1), newBoard];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleClick(i) {
    if (checkWinner(board) || board[i]) {
      return;
    }
    const newBoard = board.slice();

    if (playerX) {
      newBoard[i] = "X";
    } else {
      newBoard[i] = "O";
    }
    handlePlay(newBoard);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function handleReset(i) {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  }

  const winner = checkWinner(board);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (playerX ? "X" : "O");
  }

  return (
    <>
      <div>
        <p>{status}</p>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>

        <div className="boardRow">
          <button
            className="square"
            value={0}
            onClick={() => {
              handleClick(0);
            }}
          >
            {board[0]}
          </button>
          <button
            className="square"
            value={1}
            onClick={() => {
              handleClick(1);
            }}
          >
            {board[1]}
          </button>
          <button
            className="square"
            value={2}
            onClick={() => {
              handleClick(2);
            }}
          >
            {board[2]}
          </button>
        </div>
        <div className="boardRow">
          <button
            className="square"
            value={3}
            onClick={() => {
              handleClick(3);
            }}
          >
            {board[3]}
          </button>
          <button
            className="square"
            value={4}
            onClick={() => {
              handleClick(4);
            }}
          >
            {board[4]}
          </button>
          <button
            className="square"
            value={5}
            onClick={() => {
              handleClick(5);
            }}
          >
            {board[5]}
          </button>
        </div>
        <div className="boardRow">
          <button
            className="square"
            value={6}
            onClick={() => {
              handleClick(6);
            }}
          >
            {board[6]}
          </button>
          <button
            className="square"
            value={7}
            onClick={() => {
              handleClick(7);
            }}
          >
            {board[7]}
          </button>
          <button
            className="square"
            value={8}
            onClick={() => {
              handleClick(8);
            }}
          >
            {board[8]}
          </button>
        </div>
      </div>

      {history.map((squares, move) => {
        let description;
        description = "Go to move #" + move;
        return (
          <li>
            <Button key={move} onClick={() => jumpTo(move)}>
              {description}
            </Button>
          </li>
        );
      })}
    </>
  );
}

function checkWinner(board) {
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
