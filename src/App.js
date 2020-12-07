import React from 'react';
import Week2 from "./Components/Week2";
import Week3 from "./Components/Week3";
import Week5 from "./Components/Week5";
import Week8 from "./Components/Week8";
import Week9 from "./Components/Week9";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
<nav>
  <ul>
    <li>
      <Link to="/week-2">Week 2</Link>
    </li>
    <li>
      <Link to="/week-3">Week 3</Link>
    </li>
    <li>
      <Link to="/week-5">Week 5</Link>
    </li>
    <li>
      <Link to="/week-8">Week 8</Link>
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
      <Route path="/week-2">
        <Week2 /> 
      </Route>
      <Route path="/week-3">
        <Week3 /> 
      </Route>
      <Route path="/week-5">
        <Week5 /> 
      </Route>
      <Route path="/week-8">
        <Week8 /> 
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