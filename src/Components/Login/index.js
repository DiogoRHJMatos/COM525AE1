import React, { useState } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import hideIcon from "./Assets/hide.svg";
import showIcon from "./Assets/show.svg";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Not a valid email"),
    password: yup.string().required("Password is required"),
  });

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
    border: 2px solid #CBCBCB;
    border-radius: 10px;
    height: 51px;
    width: 271px;
    padding-left: 20px;
    font-size: 18px;
    color: #3C4044;
`;

const StyledDivInput = styled.div`
    margin-left: 20px;
`;

const StyledErrorText = styled.p`
    margin-top: 5px;
    margin-left: 5px;
    color: #ED4956;
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
    color: #3C4044;
    margin-left: 30px;
`;


const Login_Component = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, errors } = useForm({resolver: yupResolver(schema)});
    const onSubmit = data => console.log(data);

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    return (
        <StyledWrapper>
            <StyledContainer>
            <StyledHeader>Sign In</StyledHeader>
            <StyledLine></StyledLine>
            <StyledDivInput>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <StyledLabel>Email</StyledLabel>
                <p>
                    <StyledInput type="text" name="email" placeholder="example@email.com" ref={register()}/>
                    <StyledErrorText>{errors.email?.message}</StyledErrorText>
                </p>

                <StyledLabel>Password</StyledLabel>
                <p>
                    <StyledInput type={showPassword ? "text" : "password"} name="password" placeholder="••••••••••••••••" ref={register()}/>
                    <StyledIcon src={showPassword ? hideIcon : showIcon} onClick={handleClick}/>
                    <StyledErrorText>{errors.password?.message}</StyledErrorText>
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
            </form>
            </StyledDivInput>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default Login_Component;