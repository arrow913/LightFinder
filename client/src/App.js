import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lights from "./pages/Lights";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
       
          <Route exact path={["/", "/lights"]}>
            <Lights />
          </Route>
          <Route exact path="/lights/:id">
            <Detail />
          </Route>
          
      </div>
    </Router>
  );
}

export default App;
