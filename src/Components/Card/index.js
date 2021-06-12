import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import ML from "./Assets/ML.jpg";
import VF from "./Assets/VF.jpg";
import WS from "./Assets/WS.jpg";
import closeIcon from "./Assets/times-icon.svg";

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
    color: #3C4044;
    font-size: 24px;
    margin: 4px 0px 0px 20px;
`;

const StyledImg = styled.img`
    margin: 10px 10px 0px 10px;
    width: 317px;
    height: 195px;
    border-radius: 10px;
`;



const StyledModalWrapper = styled.div`
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    animation: 0.1s ${keyframes({from: {opacity: 0}, to: {opacity: 1}})} linear;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1;
    background: #3C404480;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledIconWrapper = styled.div`
    height: 42px;
    width: 42px;
    cursor: pointer;
    margin-left: 772px;
    margin-top: -500px;
`;

const StyledIcon = styled.img`
    margin: 6px;
    height: 30px;
    width: 30px;
`;

const StyledModal = styled.div`
    position:fixed;
    z-index: 2;
    border-radius: 10px;
`;

const StyledH1 = styled.h1`
    text-shadow: 0px 0px 10px rgba(0,0,0,0.16);
    font-family: 'Rubik', sans-serif;
    font-size: 52px;
    margin: 0px;
`;

const StyledH2 = styled.h2`
    text-shadow: 0px 0px 10px rgba(0,0,0,0.16);
    font-family: 'Rubik', sans-serif;
    font-size: 32px;
    margin: 0px;
`;

const StyledModalText = styled.div`
    width: 334px;
    text-align: center;
    position: absolute;
    margin-left: 198px;
    margin-top: 139px;
`;

const StyledButtonPrimary = styled.button`
    position: absolute;
    font-family: "Segoe UI semibold", Arial, Helvetica;
    color: #ffffff;
    background-color: ${(props) => props.color};
    padding: 11px 56px 16px 56px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    right: 0px;
    bottom: 0px;
    margin-right: 267px;
    margin-bottom: 67px;
    width: 197px;
    &:hover {
        background: ${(props) => props.hover};
    }
    &:active {
        background: ${(props) => props.active};
    }
`;

const StyledBackgroundImg = styled.img`
    width: 730px;
    height: 450px;
    border-radius: 10px;
`;


const Modal = (props) => {

    const {show, onClose, children} = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <>
            {show && (<StyledModalWrapper onClick={onClose}>
                <StyledIconWrapper onClick={onClose}>
                            <StyledIcon src={closeIcon}/>
                        </StyledIconWrapper>
                <StyledModal onClick={blockClick}>
                        
                    {children}
                </StyledModal>
            </StyledModalWrapper>)}
        </>
    )

}

const Card_Component = () => {

    const [showModalWS, setShowModalWS] = useState(false);
    const handleCloseWS = () => setShowModalWS(false);
    const handleClickWS = () => setShowModalWS(true);

    const [showModalVF, setShowModalVF] = useState(false);
    const handleCloseVF = () => setShowModalVF(false);
    const handleClickVF = () => setShowModalVF(true);

    const [showModalML, setShowModalML] = useState(false);
    const handleCloseML = () => setShowModalML(false);
    const handleClickML = () => setShowModalML(true);

    return (
        <StyledWrapper>
            <StyledContainer onClick={handleClickVF}>
                <StyledImg src={VF}/>
                <StyledText>Valley of Fire</StyledText>
            </StyledContainer>

            <Modal show={showModalVF} onClose={handleCloseVF}>
                <StyledModalText>
                    <StyledH1>Valley of Fire</StyledH1>
                    <StyledH2>State Park</StyledH2>
                </StyledModalText>
                <StyledButtonPrimary color="#E86F29" hover="#E65C0C" active="#D84F00">Book Now</StyledButtonPrimary>
                <StyledBackgroundImg src={VF}/>
            </Modal>


            <StyledContainer2 onClick={handleClickWS}>
                <StyledImg src={WS}/>
                <StyledText>White Sands</StyledText>
            </StyledContainer2>

            <Modal show={showModalWS} onClose={handleCloseWS}>
                <StyledModalText>
                    <StyledH1>White Sands</StyledH1>
                    <StyledH2>National Park</StyledH2>
                </StyledModalText>
                <StyledButtonPrimary color="#E89929" hover="#E58B0C" active="#D87F00">Book Now</StyledButtonPrimary>
                <StyledBackgroundImg src={WS}/>
            </Modal>


            <StyledContainer2 onClick={handleClickML}>
                <StyledImg src={ML}/>
                <StyledText>Moraine Lake</StyledText>
            </StyledContainer2>

            <Modal show={showModalML} onClose={handleCloseML}>
                <StyledModalText>
                    <StyledH1>Banff</StyledH1>
                    <StyledH2>National Park</StyledH2>
                </StyledModalText>
                <StyledButtonPrimary color="#2894E7" hover="#0A86E4" active="#007AD7">Book Now</StyledButtonPrimary>
                <StyledBackgroundImg src={ML}/>
            </Modal>
        </StyledWrapper>
    );
};

export default Card_Component;