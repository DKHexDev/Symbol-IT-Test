import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../Utils/Modal';

import PropTypes from "prop-types";

import GenerateButton from './GenerateButton';

const Box = ({ withData }) => {

    const [timer, setTimer] = useState(null);
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState({
        active: false,
        timer: 0
    })

    // Système de getion du timer aléatoire pour
    // afficher l'excuse.
    useEffect(() => {
        if (isLoading.active) {
            let timer = setInterval(() => {
                setIsLoading((prevState) => ({
                    ...prevState,
                    timer: prevState.timer - 1,
                }))
            }, 1000);
            setIsLoading((prevState) => ({
                ...prevState,
                active: false,
            }))
            setTimer(timer);
        } else if (timer !== null && isLoading.timer <= 0) {
            clearInterval(timer);
            setTimer(null);
        }
    }, [isLoading, timer])

    // Éxécuter lorsque le code http est renseigné
    // dans l'URL.
    useEffect(() => {
        if (withData !== null) {
            setData((prevState) => ({
                ...prevState,
                messageAlreadyReceived: [
                    withData?.id
                ],
                http_code: withData?.http_code,
                tag: withData?.tag,
                message: withData?.message
            }))
        }
    }, [withData])

    const [data, setData] = useState({
        messageAlreadyReceived: [],
        http_code: undefined,
        tag: undefined,
        message: undefined
    });

    return(
        <Container>
            <Title>{withData !== null ? `Code Http : ${withData.http_code}` : 'Excuses de Dev'}</Title>
            <Message>
                {isLoading.timer > 0 ? 
                    `Génération dans ${isLoading.timer} seconde${isLoading.timer >= 2 ? 's' : ''}` :
                    data.message || 'Générer votre première excuse !'
                }
            </Message>
            {withData == null && (
                <>
                    <GenerateButton 
                        data={data}
                        setData={setData}
                        setIsLoading={setIsLoading}
                        isLoading={isLoading}
                    />
                    <Button onClick={() => setVisible(true)}>
                        Créer une excuse
                    </Button>
                </>
            )}
            {visible && (
                <Modal
                    setVisible={setVisible}
                    visible={visible}
                />
            )}
        </Container>
    )
}

Box.propTypes = { 
    withData: PropTypes.object
};

export default Box;

const Container = styled.div`
    width: 40%;
    padding: 20px;
    border: 1px solid #000;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    width: 100%;
    text-align: center;
`;

const Message = styled.div`
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid #000;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.25s ease-in-out;

    &:hover {
        background: #000;
        color: #FFF;
    }
`;