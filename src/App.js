import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "../src/components/homepage";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <HomeScreen />
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
