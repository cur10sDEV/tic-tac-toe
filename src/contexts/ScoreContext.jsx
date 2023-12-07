import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialScore = {
  circle: 0,
  cross: 0,
};

export const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useLocalStorage(initialScore, "score");

  const circleWins = () => {
    setScore((prev) => {
      return { ...prev, circle: prev.circle + 1 };
    });
  };

  const crossWins = () => {
    setScore((prev) => {
      return { ...prev, cross: prev.cross + 1 };
    });
  };

  return (
    <ScoreContext.Provider value={{ score, circleWins, crossWins }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
