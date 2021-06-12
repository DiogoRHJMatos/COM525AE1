import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: #F1F3F5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const StyledPStates = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #ffffff;
  background-color: ${(props) => props.color};
  padding: 12px 56px 15px 56px;
  font-size: 18px;
  border: 0;
  border-radius: 10px;
  right: 0px;
  bottom: 0px;
  width: 197px;
  margin-bottom: 20px;
`;

const StyledSecondary = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: #E86F29;
  border-color: #E86F29;
  background-color: #ffffff;
  height: 52px;
  width: 197px;
  font-size: 18px;
  border: 3px solid;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 25px;
  margin-bottom: 40px;
  &:hover {
      color:  #E65C0C;
      border-color: #E65C0C;
  }
  &:active {
      color: #D84F00;
      border-color: #D84F00;
  }
`;

const StyledSStates = styled.button`
  font-family: "Segoe UI semibold", Arial, Helvetica;
  color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  background-color: #ffffff;
  height: 52px;
  width: 197px;
  font-size: 18px;
  border: 3px solid;
  border-radius: 10px;
  margin-left: 25px;
  margin-bottom: 20px;
`;


export const ButtonPrimary = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledPrimary color={disabled ? "#F3B693" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledPrimary>
  );
};

export const ButtonSecondary = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledSecondary color={disabled ? "#F3B693" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledSecondary>
  );
};

export const ButtonPStates = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledPStates color={disabled ? "#F3B693" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledPStates>
  );
};

export const ButtonSStates = (props) => {
  const { children, color, disabled, ...other } = props;
  return (
    <StyledSStates color={disabled ? "#F3B693" : color} disabled={disabled} {...other}>
      {" "}{children}{" "}
    </StyledSStates>
  );
};

const Buttons_Component = () => {
  return (
      <StyledWrapper>
        <table>
          <tr>
            <th>
              <ButtonPrimary color="#E86F29">
                primary
              </ButtonPrimary>
            </th>
            <th>
              <ButtonSecondary color="#E86F29">
                secondary
              </ButtonSecondary>
            </th>
          </tr>
          <tr>
            <td>
              <StyledPStates color="#E86F29">
                default
              </StyledPStates>
            </td>
            <td>
              <StyledSStates color="#E86F29">
                default
              </StyledSStates>
            </td>
          </tr>
          <tr>
            <td>
              <StyledPStates color="#E65C0C">
                hover
              </StyledPStates>
            </td>
            <td>
              <StyledSStates color="#E65C0C">
                hover
              </StyledSStates>
            </td>
          </tr>
          <tr>
            <td>
              <StyledPStates color="#D84F00">
                active
              </StyledPStates>
            </td>
            <td>
              <StyledSStates color="#D84F00">
                active
              </StyledSStates>
            </td>
          </tr>
          <tr>
            <td>
              <ButtonPStates disabled>
                disabled
              </ButtonPStates>
            </td>
            <td>
              <ButtonSStates disabled>
                disabled
              </ButtonSStates>
            </td>
          </tr>
        </table>
      </StyledWrapper>
  )
};

export default Buttons_Component;