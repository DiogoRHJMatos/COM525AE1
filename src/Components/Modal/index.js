import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import bgModal from "./Assets/backgroundModal.jpg";
import closeIcon from "./Assets/times-icon.svg";

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

        <StyledButtonSecondary onClick={handleClick} color="#2894E7">Show Modal</StyledButtonSecondary>

        <Modal show={showModal} onClose={handleClose}>
            <StyledH1>Banff</StyledH1>
            <StyledH2>National Park</StyledH2>
            <StyledP>You will never run out of places to discover in this winter wonderland.</StyledP>
            <StyledButtonPrimary color="#2894E7">Book Now</StyledButtonPrimary>
            <StyledBackgroundImg src={bgModal}/>
        </Modal>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptate, asperiores facilis distinctio ea quidem unde soluta fuga aliquam aspernatur sequi. Rerum asperiores quod similique rem omnis. Soluta, repellat quos?
        Molestiae, tempore, facere distinctio, quo aliquid vel eaque qui corrupti quia quam quasi laboriosam rem! Ipsum qui deserunt molestiae, placeat facere eligendi quam! In laborum quae officiis magni laboriosam id!
        Earum eum debitis quidem. Sunt recusandae at libero maiores natus qui quis facilis fuga dignissimos dolores ipsam sed reiciendis dolor veritatis eum reprehenderit sequi aspernatur velit pariatur non, quaerat impedit.
        Voluptate id consectetur adipisci incidunt animi quaerat quis numquam ea consequuntur magni itaque explicabo placeat dolorem repellendus hic aut quidem, illo vitae, dicta dolores cupiditate atque perspiciatis dolor aliquam! Dignissimos.
        Adipisci, quia tempora. Aut repellendus dolorem unde maiores obcaecati recusandae nobis ipsum alias. Id eius, amet atque magni expedita quidem nihil vero repellendus sunt aut quod iure doloremque possimus? Officia?
        Reiciendis inventore eum dolore, assumenda odio sint, ipsum dolorem pariatur est dolorum temporibus tempora vero necessitatibus sapiente delectus itaque quo? Eligendi distinctio dolor saepe ex voluptates aliquid eveniet molestias quaerat?
        Tempore dolorem ad nihil sequi! Deleniti facere voluptas architecto accusantium sunt obcaecati! Aperiam qui, porro delectus recusandae eius nam suscipit ratione dignissimos voluptatem quisquam reprehenderit tempora nihil esse non velit?
        Officiis, enim cupiditate numquam possimus quo quis ullam? Expedita omnis dolorum dolor architecto aspernatur temporibus? Pariatur temporibus animi harum optio assumenda culpa, odit reiciendis deleniti? Perferendis totam earum dignissimos beatae?
        Laboriosam inventore omnis perferendis dignissimos officia minus consequatur magni excepturi quisquam ullam dolorum porro provident, ab vero aspernatur in ipsa doloribus est, voluptatum id sint? Veritatis obcaecati deserunt modi explicabo.
        Nulla possimus commodi facilis nobis beatae temporibus fugit? Cumque impedit iure cum necessitatibus quos quod totam ut, expedita iusto officiis alias quae aperiam. Sed aperiam quae exercitationem reprehenderit ipsum odio?
        Fugit rem nostrum et placeat, debitis animi nobis corrupti facere expedita illo vitae. Quia, aut doloribus nesciunt rem possimus nihil quae, voluptates natus, suscipit perferendis deserunt porro magni veniam laboriosam?
        Velit laudantium nemo facilis quam quo aliquid, quidem rerum voluptatum, eligendi pariatur, unde autem vitae iure omnis suscipit rem provident optio praesentium. Obcaecati hic harum quaerat perferendis ipsam nemo est?
        Corporis quae fugit aut dolor voluptates, iusto aliquam delectus facilis molestiae impedit maiores nemo natus consequuntur dolorem doloremque vel blanditiis! Recusandae aspernatur quam hic ipsam a ex laborum architecto sequi?
        Aspernatur unde voluptatibus, quas quia itaque ea sunt laborum. Hic accusantium similique sequi natus numquam alias officiis tenetur dignissimos ipsum! Amet laborum id labore fugit praesentium sit incidunt ad ab.
        Accusantium rerum facilis tempora modi fugiat, voluptatibus labore ea nam culpa perspiciatis, repellendus itaque sint ratione iusto. Voluptate sunt culpa quam sed officia adipisci quod itaque vero, molestiae, possimus totam?
        Totam numquam similique ipsum doloribus esse nulla cumque beatae nesciunt officiis.
        </>
    )
}

export default Modal_Component;