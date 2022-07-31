import React from 'react';
import styled from 'styled-components';

import LostGif from '../../assets/Lost.gif';

const LostContainer = () => {
    return(
        <Container>
            <TitleLost>i’m lost</TitleLost>
            <ImageGif src={LostGif} />
        </Container>
    )
}

export default LostContainer;

const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const TitleLost = styled.h1`
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.2px;
    text-transform: uppercase;
`;

const ImageGif = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
`;