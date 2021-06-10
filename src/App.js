import React from 'react';
import Week3 from "./Components/Week3";
import Week4 from "./Components/Week4";
import Week5 from "./Components/Week5";
import Modal_Component from "./Components/Modal";
import Week9 from "./Components/Card";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
<nav>
  <ul>
    <li>
      <Link to="/week-4">Login</Link>
    </li>
    <li>
      <Link to="/week-3">Buttons</Link>
    </li>
    <li>
      <Link to="/week-5">Navigation Bar</Link>
    </li>
    <li>
    <Link to="/Card">Card</Link>
    </li>
    <li>
      <Link to="/Modal">Modal</Link>
    </li>
  </ul>
</nav>
);

const App = () => (
  <Router> 
    <Switch>
      <Route path="/week-4">
        <Week3 /> 
      </Route>
      <Route path="/week-3">
        <Week4 /> 
      </Route>
      <Route path="/week-5">
        <Week5 /> 
      </Route>
      <Route path="/Card">
        <Card_Component /> 
      </Route>
      <Route path="/Modal">
        <Modal_Component /> 
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router> 
);


export default App;