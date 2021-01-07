import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lights from "./pages/Lights";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/lights"]}>
            <Books />
          </Route>
          <Route exact path="/lights/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
