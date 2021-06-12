import React from 'react';
import styled from "styled-components";
import Buttons_Component from "./Components/Buttons";
import Login_Component from "./Components/Login";
import Nav_Component from "./Components/Nav";
import Modal_Component from "./Components/Modal";
import Card_Component from "./Components/Card";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledWrapper = styled.div`
    font-family: "Segoe UI semibold", Arial, Helvetica;
    background: #F1F3F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    
    
    & li {
      
      text-align: center;
      list-style: none;
      margin-top: 10px;
      cursor: pointer;
      color: #ffffff;
      background-color: #999999;
      padding: 12px 56px 15px 56px;
      font-size: 18px;
      border: 0;
      border-radius: 10px;
      right: 0px;
      bottom: 0px;
      width: 197px;
      margin-bottom: 40px;
      &:hover {
          background: #E65C0C;
      }
      &:active {
          background: #D84F00;
      }
    }
`;

const StyledPrimary = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #ffffff;
  background-color: #E86F29;
  padding: 12px 56px 15px 56px;
  font-size: 18px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  right: 0px;
  bottom: 0px;
  width: 197px;
  margin-bottom: 40px;
  &:hover {
      background: #E65C0C;
  }
  &:active {
      background: #D84F00;
  }
`;

const Home = () => (
<StyledWrapper>
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
</StyledWrapper>
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