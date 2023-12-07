import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

export const useScore = () => {
  const scoreContext = useContext(ScoreContext);

  if (scoreContext === undefined) {
    throw new Error("ScoreContext is used outside the ScoreProvider");
  }

  return scoreContext;
};
