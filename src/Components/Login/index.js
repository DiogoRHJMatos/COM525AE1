import React, { useState } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import runner from "./Assets/runner.jpg";
import hideIcon from "./Assets/hide.svg";
import showIcon from "./Assets/show.svg";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Not a valid email"),
    password: yup.string().required("Password is required"),
  });

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const StyledHeader = styled.h1`
    color: #1e57f1;
    margin-left: 2rem;
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 1px solid #c7c7c7;
    height: 63px;
    width: 337px;
    padding-left: 10px;
    font-size: 18px;
`;

const StyledIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-left: -40px;
    margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
    color: red;
`;

const StyledButton = styled.button`
    height: 63px;
    width: 350px;
    background: #1e57f1;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    border: 0;
    cursor: pointer;
    &:hover {
        background: red;
    }
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
            <img src={runner}/>
            <StyledHeader>Sally</StyledHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <StyledInput type="text" name="email" placeholder="Email" ref={register()}/>
                    <StyledErrorText>{errors.email?.message}</StyledErrorText>
                </p>
                <p>
                    <StyledInput type={showPassword ? "text" : "password"} name="password" placeholder="Password" ref={register()}/>
                    <StyledIcon src={showPassword ? hideIcon : showIcon} onClick={handleClick}/>
                    <StyledErrorText>{errors.password?.message}</StyledErrorText>
                </p>
                <p>
                    <StyledButton>Login</StyledButton>
                </p>
            </form>
        </StyledWrapper>
    );
};

export default Login_Component;