import React from 'react';
import styled from 'styled-components';
import Box from './Box';

import PropTypes from 'prop-types';

const HomeContainer = ({ withData }) => {
    return(
        <Container>
            <Box withData={withData} />
        </Container>
    )
}

HomeContainer.propTypes = { 
    withData: PropTypes.object
};

export default HomeContainer;

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
