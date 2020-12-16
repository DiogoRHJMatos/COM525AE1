import React from 'react';
import Week3 from "./Components/Week3";
import Week4 from "./Components/Week4";
import Week5 from "./Components/Week5";
import Modal_Component from "./Components/Modal";
import Week9 from "./Components/Week9";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
<nav>
  <ul>
    <li>
      <Link to="/week-3">Week 3</Link>
    </li>
    <li>
      <Link to="/week-4">Week 4</Link>
    </li>
    <li>
      <Link to="/week-5">Week 5</Link>
    </li>
    <li>
      <Link to="/Modal">Modal</Link>
    </li>
    <li>
      <Link to="/week-9">Week 9</Link>
    </li>
  </ul>
</nav>
);

const App = () => (
  <Router> 
    <Switch>
      <Route path="/week-3">
        <Week3 /> 
      </Route>
      <Route path="/week-4">
        <Week4 /> 
      </Route>
      <Route path="/week-5">
        <Week5 /> 
      </Route>
      <Route path="/Modal">
        <Modal_Component /> 
      </Route>
      <Route path="/week-9">
        <Week9 /> 
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router> 
);


export default App;