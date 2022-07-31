import React from 'react';
import styled from 'styled-components';

const ErrorContainer = () => {
    return(
        <Container>
            <Error>404 - Not Found !</Error>
        </Container>
    )
}

export default ErrorContainer;

const Error = styled.h1`
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.3px;
`;

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;