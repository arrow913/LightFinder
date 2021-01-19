import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lights from "./pages/Lights";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import MapSection from './components/map/Map'


function App() {
  const location = {
    address: '108 deer point rd, Unionville, TN 37180.',
    lat: 35.574323,
    lng: -86.574609,
  }
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
          <MapSection location={location} zoomLevel={17} /> {/* include it here */}
      </div>
    </Router>
  );
}

export default App;
