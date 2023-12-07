import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";

export const useBoard = () => {
  const boardContext = useContext(BoardContext);

  if (boardContext === undefined) {
    throw new Error("BoardContext is used outside the BoardProvider");
  }

  return boardContext;
};
