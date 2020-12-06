import React from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes />
        </Router>
      </main>
    </div>
  );
};

export default App;
