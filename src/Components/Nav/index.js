import React, { useState } from 'react';
import styled from "styled-components";
import closeIcon from "./Assets/times-solid.svg";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSideNav = styled.div`
  height: 100vh;
  border-radius: 50px 0 0 50px;
  width: ${(props) => props.open ? '250px' : '0px'};
  transition: 1s;
  position: fixed;
  top: 0;
  right: 0;
  background: #2894E7;
`;

const StyledCloseIcon = styled.img`
  float: left;
  width: 15px;
  height: 15px;
  fill: white;
  margin: 25px;
  cursor: pointer;
`;

const StyledNav = styled.ul`
  display: flex;
  color: white;
  flex-direction: column;
  & li {
    list-style: none;
    margin-top: 4rem;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
`;

const StyledButton = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #2894E7;
  border-color: #2894E7;
  background-color: #ffffff;
  padding: 10px 45px 15px 45px;
  font-size: 16px;
  border: 2px solid;
  border-radius: 8px;
  cursor: pointer;
  margin: 2%;
  &:hover {
      color:  #0A86E4;
      border-color: #0A86E4;
  }
  &:active {
      color: #007AD7;
      border-color: #007AD7;
  }
`;

const Nav_Component = () => {

  const [navOpen, setNavOpen] = useState(false);

  const handleClose = () => {
    setNavOpen(false);
  }

  const handleOpenClose = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <StyledWrapper>
        <StyledSideNav open={navOpen}>
          <StyledCloseIcon onClick={handleClose} src={closeIcon} />
            {navOpen && (<StyledNav>
                <li>Home</li>
                <li>About</li>
                <li>Privacy</li>
                <li>Contacts</li>
              </StyledNav>)
            }
        </StyledSideNav> 
        <StyledButton onClick={handleOpenClose}> Open Nav </StyledButton>
      </StyledWrapper>
    </>
  )
};

export default Nav_Component;