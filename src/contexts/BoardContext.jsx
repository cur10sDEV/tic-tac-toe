import { createContext, useCallback, useEffect, useState } from "react";

import { useScore } from "../hooks/useScore";

export const BoardContext = createContext();

const initialBoard = ["", "", "", "", "", "", "", "", ""];

const BoardProvider = ({ children }) => {
  const { circleWins, crossWins } = useScore();
  const [board, setBoard] = useState(initialBoard);
  const [count, setCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleBoxClick = (e) => {
    const id = Number(e.target.id);
    const updatedBoard = board.map((value, i) => {
      if (i === id) {
        if (count % 2 === 0) {
          return (value += "o");
        } else {
          return (value += "x");
        }
      }
      return value;
    });
    setCount((prev) => prev + 1);
    setBoard(updatedBoard);
    handleComputation();
  };

  const handleComputation = useCallback(() => {
    // check if there's empty boxes left or not
    const empty = board.findIndex((value) => value === "");
    if (empty === -1) {
      setIsGameOver(true);
      setMessage("Game Over");
    }

    // check for winning condition
    // first row - 0 1 2
    if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
      won(board[0]);
    }
    // second row - 3 4 5
    else if (
      board[3] !== "" &&
      board[3] === board[4] &&
      board[4] === board[5]
    ) {
      won(board[3]);
    }
    // third row - 6 7 8
    else if (
      board[6] !== "" &&
      board[6] === board[7] &&
      board[7] === board[8]
    ) {
      won(board[6]);
    }
    // first column - 0 3 6
    else if (
      board[0] !== "" &&
      board[0] === board[3] &&
      board[3] === board[6]
    ) {
      won(board[0]);
    }
    // second column - 1 4 7
    else if (
      board[1] !== "" &&
      board[1] === board[4] &&
      board[4] === board[7]
    ) {
      won(board[1]);
    }
    // third column - 2 5 8
    else if (
      board[2] !== "" &&
      board[2] === board[5] &&
      board[5] === board[8]
    ) {
      won(board[2]);
    }
    // diagonal - 0 4 8
    else if (
      board[0] !== "" &&
      board[0] === board[4] &&
      board[4] === board[8]
    ) {
      won(board[0]);
    }
    // diagonal - 2 4 6
    else if (
      board[2] !== "" &&
      board[2] === board[4] &&
      board[4] === board[6]
    ) {
      won(board[2]);
    }
  }, [board]);

  const won = useCallback((winner) => {
    // update scorecard
    winner === "x" ? crossWins() : circleWins();

    setIsGameOver(true);
    setMessage(`${winner.toUpperCase()} wins!`);
  }, []);

  useEffect(() => {
    handleComputation();
  }, [board]);

  const reset = () => {
    setIsGameOver(false);
    setCount(0);
    setMessage("");
    setBoard(initialBoard);
  };

  return (
    <BoardContext.Provider
      value={{ isGameOver, handleBoxClick, message, board, reset }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
