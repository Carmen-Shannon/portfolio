import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Navbar from "./components/Navbar";
import About from "./views/About";
import SelectedTab from "./contexts/SelectedTab";
import BullyBot from "./components/BullyBot";
import Products from "./views/Products";
import Misc from "./views/Misc";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <div className="page">
          <SelectedTab.Provider value={{}}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
                <Misc />
              </Route>
              <Route exact path="/about">
                <Dashboard />
                <About />
              </Route>
              <Route exact path="/products">
                <Dashboard />
                <Products />
              </Route>
            </Switch>
          </SelectedTab.Provider>
        </div>
      </div>
      <div className="maincolumn"></div>
    </div>
  );
}

export default App;
