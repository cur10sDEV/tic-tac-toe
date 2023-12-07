import IMAGES from "../assets/images";
import { useScore } from "../hooks/useScore";

const Scorecard = () => {
  const { score } = useScore();

  return (
    <div className="flex gap-16 items-center justify-center text-2xl my-8">
      <div className="circle">
        <img className="w-8 h-8" src={IMAGES.circle} alt="circle" />
        <h2 className="mt-2">{score.circle}</h2>
      </div>
      <div className="cross">
        <img className="w-6 h-6" src={IMAGES.cross} alt="cross" />
        <h2 className="mt-2">{score.cross}</h2>
      </div>
    </div>
  );
};
export default Scorecard;
