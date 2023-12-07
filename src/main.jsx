import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ScoreProvider from "./contexts/ScoreContext.jsx";
import BoardProvider from "./contexts/BoardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScoreProvider>
      <BoardProvider>
        <App />
      </BoardProvider>
    </ScoreProvider>
  </React.StrictMode>
);
