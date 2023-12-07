import Button from "./Button";

const Modal = ({ message }) => {
  return (
    <div className="z-50 absolute h-full w-full bg-slate-600 top-0 left-0 flex flex-col justify-center items-center bg-opacity-70 backdrop-blur-sm">
      <h2 className="text-3xl text-yellow-400 font-bold">{message}</h2>
      <Button>Play Again</Button>
    </div>
  );
};
export default Modal;
