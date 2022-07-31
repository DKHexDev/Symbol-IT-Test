import React, { useContext } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

import allDataContext from "../../common/contexts/allDataContext";

const GenerateButton = ({ data, setData, isLoading, setIsLoading }) => {

    const { allData } = useContext(allDataContext);

    // Fonction qui permet de choisir une excuse aléatoirement
    // sans que la précédente excuse soit rechoisie
    const Generate = () => {
        if (isLoading.timer >= 1) return;

        setIsLoading((prevState) => ({
            ...prevState,
            active: true,
            timer: Math.floor(Math.random() * 5),
        }))
        // Si le nombre d'excuse affiché une fois est égal au nombre total d'excuses dans l'application,
        // alors on vide le tableau des excuses déjà affiché.
        if (data.messageAlreadyReceived.length === allData.length) {
            setData((prevState) => ({
                ...prevState,
                messageAlreadyReceived: [],
            }))
        };

        // Boucle infinie, elle sera brisée lorsqu'une excuse 
        // est trouvée et qu'elle n'a pas déjà été affiché.
        while( true ) {
            let dataSelected = allData[Math.floor(Math.random() * allData.length)];
            if (!allData.includes(dataSelected.id)) {
                setData((prevState) => ({
                    ...prevState,
                    messageAlreadyReceived: [
                        ...prevState.messageAlreadyReceived,
                        dataSelected?.id
                    ],
                    http_code: dataSelected?.http_code,
                    tag: dataSelected?.tag,
                    message: dataSelected?.message,
                }))
                break;
            }
        }
    }

    return <Button onClick={() => Generate()}>Générer</Button>;
}

GenerateButton.propTypes = { 
    data: PropTypes.object,
    setData: PropTypes.func,
    isLoading: PropTypes.object,
    setIsLoading: PropTypes.func
};

export default GenerateButton;

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