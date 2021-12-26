import { createContext } from "react";
import { Css } from "./sections/css";
import { Html } from "./sections/html";
import { Js } from "./sections/js";
import { Playground } from "./sections/playground";
import { Topbar } from "./sections/topbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <div className="container-row">
          <div className="container-column">
            <Html />
          </div>
          <div className="container-column">
            <Css />
          </div>
        </div>
        <div className="container-row">
          <div className="container-column">
            <Js />
          </div>
          <div className="container-column">
            <Playground />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
