import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import allDataContext from '../../common/contexts/allDataContext';

import Close from '../../assets/icons/Close';
import addData from '../../common/requests/addData';
import getAllData from '../../common/requests/getAllData';

const Modal = ({ visible, setVisible }) => {
    
    const { setAllData } = useContext(allDataContext);

    const [infos, setInfos] = useState({
        http_code: undefined,
        tag: undefined,
        message: undefined,
    });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfos((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const Add = async () => {
        if (
            infos.http_code === undefined ||
            infos.tag === undefined ||
            infos.message === undefined
        ) return;

        addData(infos);

        const newAllData = await getAllData();
        setAllData(newAllData);

        setVisible(false);
    }
    
    return(
        <Container>
            <ModalContainer>
                <CloseContainer onClick={() => setVisible(false)}>
                    <Close size={24} fill="#000" />
                </CloseContainer>
                <Input 
                    name="http_code"
                    type="number"
                    placeholder="Code HTTP"
                    onChange={(e) => onChange(e)}
                />
                <Input 
                    name="tag"
                    type="text"
                    placeholder="Tag"
                    onChange={(e) => onChange(e)}
                />
                <Input 
                    name="message"
                    type="text"
                    placeholder="Message"
                    onChange={(e) => onChange(e)}
                />
                <Button onClick={() => Add()}>
                    Ajouter l'excuse
                </Button>
            </ModalContainer>
        </Container>
    )
}

Modal.propTypes = { 
    visible: PropTypes.bool,
    setVisible: PropTypes.func
};


export default Modal;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.div`
    background-color: white;
    width: 20%;
    height: auto;
    position: relative;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
`;

const CloseContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const Input = styled.input`
    padding: 10px;
    width: 90%;
    border: 1px solid #000;
    font-family: 'Roboto', sans-serif;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: grey;
        font-family: 'Roboto', sans-serif;
    }
`;

const Button = styled.button`
    width: 90%;
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