import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComp from './components/Nav';
import JumbotronComp from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchProvider } from './utils/SearchContext';

function App() {
  return (
    <Router>
      <SearchProvider>
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
      </SearchProvider>
    </Router>
  );
}


export default App;
