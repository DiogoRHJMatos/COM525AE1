import React from 'react';
import Buttons_Component from "./Components/Buttons";
import Login_Component from "./Components/Login";
import Nav_Component from "./Components/Nav";
import Modal_Component from "./Components/Modal";
import Card_Component from "./Components/Card";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
<nav>
  <ul>
    <li>
      <Link to="/Login">Login</Link>
    </li>
    <li>
      <Link to="/Buttons">Buttons</Link>
    </li>
    <li>
      <Link to="/Nav">Navigation Bar</Link>
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
      <Route path="/Login">
        <Login_Component /> 
      </Route>
      <Route path="/Buttons">
        <Buttons_Component /> 
      </Route>
      <Route path="/Nav">
        <Nav_Component /> 
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