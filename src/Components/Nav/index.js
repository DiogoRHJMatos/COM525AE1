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
  width: 18px;
  height: 18px;
  fill: white;
  margin: 25px 0px 0px 25px;
  cursor: pointer;
`;

const StyledNav = styled.div`
  color: #2894E7;
  background: #2894E7;
  cursor: pointer;
  margin-top: 60px;
  &:hover {
    font-weight: bold;
  }

`;

const Styleddiv = styled.div`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #ffffff;
  background-color: #2894E7;
  text-align: center;
  padding: 40px 40px 40px 40px;
  font-size: 18px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  width: 169
  px;
  position: relative;
  &:hover { 
    background: #007AD7;
  }
  &:active {
    background: #0A86E4;
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
                <Styleddiv>
                  Home
                </Styleddiv>
                <Styleddiv>
                  Services
                </Styleddiv>
                <Styleddiv>
                  About
                </Styleddiv>
                <Styleddiv>
                  FAQ
                </Styleddiv>
                <Styleddiv>
                  Contacts
                </Styleddiv>
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