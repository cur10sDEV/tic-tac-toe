import { useBoard } from "../hooks/useBoard";

const Button = ({ children }) => {
  const { reset } = useBoard();

  const handleClick = () => {
    reset();
  };

  return (
    <button
      className="bg-slate-700 rounded-full text-lg my-8 font-bold"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default Button;
