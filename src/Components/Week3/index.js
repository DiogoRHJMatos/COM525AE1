import React from 'react';
import styled from "styled-components";
import saveIconStroke from "./Assets/bookmark-regular.svg";
import saveIconFull from "./Assets/bookmark-solid.svg";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonPrimary = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: ${(props) => props.color};
  background-color: #ffffff;
  padding: 10px 32px 14px 32px;
  font-size: 18px;
  border: 2.5px solid;
  border-color: ${(props) => props.color};
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

const StyledIcon = styled.img`
    margin-right: 10px;
    height: 18px;
    width: 14px;
    vertical-align: sub;
`;

export const ButtonPrimary = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledButtonPrimary color={disabled ? "#90C7F1" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledButtonPrimary>
  );
};

const Week3 = () => {
  return (
      <StyledWrapper>
        <ButtonPrimary color="#2894E7">
            <StyledIcon src={saveIconStroke}/>Save
        </ButtonPrimary>
        <ButtonPrimary color="#2894E7">
            <StyledIcon src={saveIconFull}/>Save
        </ButtonPrimary>
      </StyledWrapper>
  )
};

export default Week3;