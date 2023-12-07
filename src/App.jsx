import "./App.css";
import Board from "./components/Board";
import Button from "./components/Button";
import Scorecard from "./components/Scorecard";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Scorecard />
      <Board />
      <Button>Reset</Button>
    </div>
  );
}

export default App;
