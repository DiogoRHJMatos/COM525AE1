import React, { useState } from 'react';
import styled from "styled-components";
import ML from "./Assets/ML.jpg";
import VF from "./Assets/VF.jpg";
import WS from "./Assets/WS.jpg";

const StyledWrapper = styled.div`
    font-family: "Segoe UI semibold", Arial, Helvetica;
    background: #F1F3F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100vh;
`;

const StyledContainer = styled.div`
    background: #ffffff;
    border-radius: 15px;
    width: 337px;
    height: 257px;
    cursor: pointer;
`;

const StyledContainer2 = styled.div`
    background: #ffffff;
    border-radius: 15px;
    width: 337px;
    height: 257px;
    margin-left: 80px;
    cursor: pointer;
`;

const StyledText = styled.h2`
    font-size: 24px;
    margin: 4px 0px 0px 20px;
`;

const StyledImg = styled.img`
    margin: 10px 10px 0px 10px;
    width: 317px;
    height: 195px;
    border-radius: 10px;
`;


const Card_Component = () => {


    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledImg src={ML}/>
                <StyledText>Moraine Lake</StyledText>
            </StyledContainer>

            <StyledContainer2>
                <StyledImg src={VF}/>
                <StyledText>Valley of Fire</StyledText>
            </StyledContainer2>

            <StyledContainer2>
                <StyledImg src={WS}/>
                <StyledText>White Sands</StyledText>
            </StyledContainer2>
        </StyledWrapper>
    );
};

export default Card_Component;