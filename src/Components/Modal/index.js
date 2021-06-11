import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import bgModal from "./Assets/backgroundModal.jpg";
import closeIcon from "./Assets/times-icon.svg";

const StyledWrapper = styled.div`
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
    background: #11365370;
    oppacity: 0.6%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled.div`
    position:fixed;
    z-index: 2;
    border-radius: 8px;
`;

const StyledModalHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem;
    font-size: 30px;
    cursor: pointer;
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
    border-radius: 8px;
`;

const StyledH1 = styled.h1`
    position: absolute;
    font-family: 'Rubik', sans-serif;
    font-size: 46px;
    margin-left: 65px;
    margin-top: 133px;
`;

const StyledH2 = styled.h2`
    position: absolute;
    font-family: 'Rubik', sans-serif;
    font-size: 32px;
    margin-left: 65px;
    margin-top: 187.5px;
`;

const StyledP = styled.p`
    position: absolute;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    width: 315px;
    height: 52px;
    bottom: 0px;
    margin-left: 65px;
    margin-bottom: 87px;
`;

const StyledButtonPrimary = styled.button`
    position: absolute;
    font-family: "Segoe UI semibold", Arial, Helvetica;
    color: #ffffff;
    background-color: #2894E7;
    padding: 11px 56px 16px 56px;
    font-size: 18px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    right: 0px;
    bottom: 0px;
    margin-right: 65px;
    margin-bottom: 87px;
    width: 197px;
    &:hover {
        background: #0A86E4;
    }
    &:active {
        background: #007AD7;
    }
`;

const StyledButtonSecondary = styled.button`
    font-family: "Segoe UI semibold", Arial, Helvetica;
    color: #2894E7;
    border-color: #2894E7;
    background-color: #ffffff;
    padding: 10px 45px 15px 45px;
    font-size: 16px;
    border: 2px solid;
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
        <StyledButtonSecondary onClick={handleClick} color="#2894E7">Show Modal</StyledButtonSecondary>

        <Modal show={showModal} onClose={handleClose}>
            <StyledH1>Banff</StyledH1>
            <StyledH2>National Park</StyledH2>
            <StyledP>You will never run out of places to discover in this winter wonderland.</StyledP>
            <StyledButtonPrimary color="#2894E7">Book Now</StyledButtonPrimary>
            <StyledBackgroundImg src={bgModal}/>
        </Modal>

        </StyledWrapper>
        </>
    )
}

export default Modal_Component;