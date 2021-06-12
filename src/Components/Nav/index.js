import React, { useState } from 'react';
import styled from "styled-components";
import closeIcon from "./Assets/times-solid.svg";
import menuIcon from "./Assets/bars-solid.svg";

const StyledWrapper = styled.div`
  background-color: #F1F3F5;
  height: 100vh;
`;

const StyledSideNav = styled.div`
  height: 100vh;
  border-radius: 40px 0 0 40px;
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

const StyledMenuIcon = styled.img`
  float: right;
  width: 25px;
  height: 25px;
  fill: white;
  margin: 25px;
  cursor: pointer;
`;

const StyledText = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <StyledMenuIcon onClick={handleOpenClose} src={menuIcon} />
        <StyledText>click on the burguer menu</StyledText>
      </StyledWrapper>
    </>
  )
};

export default Nav_Component;