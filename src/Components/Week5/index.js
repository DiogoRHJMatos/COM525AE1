import React, { useState } from 'react';
import styled from "styled-components";
import closeIcon from "./Assets/times-solid.svg";
import { Button } from "../Week3";
import { useSwipeable } from "react-swipeable";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSideNav = styled.div`
  height: 100vh;
  width: ${(props) => props.open ? '250px' : '0px'};
  transition: 1s;
  position: fixed;
  top: 0;
  left: 0;
  background: #999999;
`;

const StyledCloseIcon = styled.img`
  float: right;
  width: 25px;
  height: 25px;
  fill: white;
  margin: 1rem 1 rem;
  cursor: pointer;
`;

const StyledNav = styled.ul`
  display: flex;
  color: white;
  flex-direction: column;
  & li {
    text-align: center;
    list-style: none;
    margin-top: 4rem;
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }
`;

const Week5 = () => {

  const [navOpen, setNavOpen] = useState(false);

  const handlers = useSwipeable({onSwipedRight: () => setNavOpen(true),
      onSwipedLeft: () => setNavOpen(false)});

  const handleClose = () => {
    setNavOpen(false);
  }

  const handleOpen = () => {
    setNavOpen(true);
  }

  const handleSwipe = (event) => {
    if (event.dir === "Right") {
      setNavOpen(true);
    }

    if (event.dir === "Left") {
      setNavOpen(false);
    }
  }

  return (
    <>
      <StyledWrapper {...handlers}>
        <StyledSideNav open={navOpen}>
          <StyledCloseIcon onClick={handleClose} src={closeIcon} />
            {navOpen && (<StyledNav>
                <li>Home</li>
                <li>About</li>
                <li>Privacy</li>
              </StyledNav>)
            }
        </StyledSideNav> 
      <Button onClick={handleOpen} color="#1200ee"> Open Nav </Button>
      </StyledWrapper>
    </>
  )
};

export default Week5;