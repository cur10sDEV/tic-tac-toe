import Box from "./Box";
import Modal from "./Modal";

import { useBoard } from "../hooks/useBoard";

const Board = () => {
  const { isGameOver, handleBoxClick, message, board } = useBoard();

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 my-4">
      {board &&
        board.map((value, i) => (
          <Box key={i} boxId={i} value={value} onClick={handleBoxClick} />
        ))}
      {isGameOver && <Modal message={message} />}
    </div>
  );
};

export default Board;
