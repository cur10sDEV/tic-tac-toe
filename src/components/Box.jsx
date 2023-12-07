import IMAGES from "../assets/images/index";

const Box = ({ boxId, onClick, value }) => {
  return (
    <div
      id={boxId}
      className="w-24 h-24 bg-slate-700 flex items-center justify-center p-4 rounded-md"
      onClick={value === "" ? onClick : null}
    >
      {value === "o" ? (
        <img src={IMAGES.circle} alt="circle" className="w-full" />
      ) : (
        value === "x" && (
          <img src={IMAGES.cross} alt="circle" className="w-full" />
        )
      )}
    </div>
  );
};

export default Box;
