import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonPrimary = styled.button`
position: absolute;
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #ffffff;
  background-color: ${(props) => props.color};
  padding: 11px 56px 16px 56px;
  font-size: 18px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  margin: 2%;
  &:hover {
    background: #0A86E4;
}
  &:active {
    background: #007AD7;
  }
`;

const StyledButtonSecondary = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: ${(props) => props.color};
  background-color: #ffffff;
  padding: 11px 56px 16px 56px;
  font-size: 18px;
  border: 2px solid;
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

export const ButtonPrimary = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledButtonPrimary color={disabled ? "#90C7F1" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledButtonPrimary>
  );
};

export const ButtonSecondary = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledButtonSecondary color={disabled ? "#90C7F1" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledButtonSecondary>
  );
};

const Week3 = () => {
  return (
      <StyledWrapper>
          <ButtonPrimary color="#2894E7">Button</ButtonPrimary>
          <ButtonSecondary color="#2894E7">Button</ButtonSecondary>
      </StyledWrapper>
  )
};

export default Week3;