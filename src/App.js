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
      cursor: pointer;
      border: 0;
      border-radius: 10px;
      right: 0px;
      bottom: 0px;
    }
`;

const StyledButton = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #ffffff;
  background-color: #CCCCCC;
  padding: 12px 45px 15px 45px;
  font-size: 18px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  right: 0px;
  bottom: 0px;
  width: 220px;
  margin-bottom: 40px;
  &:hover { 
      background: ${(props) => props.hover};
  }
  &:active {
      background: ${(props) => props.active};
  }
`;

const Home = () => (
<StyledWrapper>
  <ul>
    <li>
      <Link to="/Login">
        <StyledButton hover="#0A86E4" active="#007AD7">Login</StyledButton>
      </Link>
    </li>
    <li>
      <Link to="/Buttons">
        <StyledButton hover="#E65C0C" active="#D84F00">Buttons</StyledButton>
      </Link>
    </li>
    <li>
      <Link to="/Nav">
        <StyledButton hover="#007AD7" active="#007AD7">Navigation</StyledButton>
      </Link>
    </li>
    <li>
      <Link to="/Card">
        <StyledButton hover="#E58B0C" active="#D87F00">Cards</StyledButton>
      </Link>
    </li>
    <li>
      <Link to="/Modal">
        <StyledButton hover="#E58B0C" active="#D87F00">Modal</StyledButton>
      </Link>
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