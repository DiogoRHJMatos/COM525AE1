import React, { useState } from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
    font-family: "Segoe UI semibold", Arial, Helvetica;
    background: #F1F3F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const StyledContainer = styled.div`
    background: #ffffff;
    border-radius: 15px;
    height: 510px;
    width: 337px;
`;

const StyledHeader = styled.h1`
    color: #3C4044;
    margin-left: 20px;
    font-size: 24px;
`;

const StyledLine = styled.hr`
  color: #FFFFFF;
  width: 296px;
`;

const StyledLabel = styled.h2`
    color: #3C4044;
    font-size: 20px;
    margin-left: 5px;
`;

const StyledIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-left: -40px;
    margin-bottom: -5px;
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 2px solid #EDEDED;
    border-radius: 10px;
    height: 51px;
    width: 271px;
    padding-left: 20px;
    font-size: 18px;
    color: #CBCBCB;
`;

const StyledDivInput = styled.div`
    margin-left: 20px;
`;

const StyledErrorText = styled.p`
    margin-top: 5px;
    margin-left: 5px;
    color: red;
`;

const StyledButton = styled.button`
    font-family: "Segoe UI semibold", Arial, Helvetica;
    color: #ffffff;
    background-color: #2894E7;
    padding: 11px 56px 16px 56px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    width: 296px;
    &:hover {
        background: #0A86E4;
    }
    &:active {
        background: #007AD7;
    }
`;

const StyledForgot = styled.div`
    color: #CBCBCB;
    margin-left: 5px;
`;

const StyledInfo = styled.p`
    color: #CBCBCB;
    margin-left: 30px;
`;


const Card_Component = () => {


    return (
        <StyledWrapper>
            <StyledContainer>
            <StyledHeader>Sign In</StyledHeader>
            <StyledLine></StyledLine>
            <StyledDivInput>
                
                <StyledLabel>Email</StyledLabel>
                <p>
                    <StyledInput type="text" name="email" placeholder="example@email.com"/>
                </p>

                <StyledLabel>Password</StyledLabel>
                <p>
                    <StyledInput type="password" name="password" placeholder="••••••••••••••••"/>
                </p>
                
                <div>
                    <StyledForgot>
                    Forgot Password?
                    </StyledForgot>
                    <p>
                        <StyledButton>Sign In</StyledButton>
                    </p>
                    <StyledInfo>Don't have an account? Sign up</StyledInfo>
                </div>
            </StyledDivInput>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default Card_Component;