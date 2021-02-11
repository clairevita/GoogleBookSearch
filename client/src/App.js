import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComp from './components/Nav';
import JumbotronComp from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavComp />
        <JumbotronComp />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/noMatch">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
