import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import bgModal from "./Assets/WS.jpg";
import closeIcon from "./Assets/times-icon.svg";

const StyledWrapper = styled.div`
    background: #F1F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
    background-color: #11365360;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled.div`
    position:fixed;
    z-index: 2;
    border-radius: 10px;
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

const StyledBackgroundImg = styled.img`
    width: 730px;
    height: 450px;
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
    background-color: #E89929;
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
        background: #E58B0C;
    }
    &:active {
        background: #D87F00;
    }
`;

const StyledButtonSecondary = styled.button`
    font-family: "Segoe UI semibold", Arial, Helvetica;
    color: #E89929;
    border-color: #E89929;
    background-color: #ffffff;
    height: 52px;
    width: 197px;
    font-size: 18px;
    border: 3px solid;
    border-radius: 10px;
    cursor: pointer;
    margin: 2%;
    &:hover {
        color:  #E58B0C;
        border-color: #E58B0C;
    }
    &:active {
        color: #D87F00;
        border-color: #D87F00;
    }
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

const Modal_Component = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleClick = () => setShowModal(true);

    return (
    <>
        <StyledWrapper>
        <StyledButtonSecondary onClick={handleClick}>Show Modal</StyledButtonSecondary>

        <Modal show={showModal} onClose={handleClose}>
            <StyledModalText>
                <StyledH1>White Sands</StyledH1>
                <StyledH2>National Park</StyledH2>
            </StyledModalText>
            <StyledButtonPrimary>Book Now</StyledButtonPrimary>
            <StyledBackgroundImg src={bgModal}/>
        </Modal>

        </StyledWrapper>
        </>
    )
}

export default Modal_Component;