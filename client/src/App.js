import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';
import "./App.css";
import Unfound from "./pages/Unfound";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            <Unfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
