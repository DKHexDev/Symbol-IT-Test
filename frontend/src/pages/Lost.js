import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LostContainer } from '../components/index';

const Lost = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => navigate('/'), 5000);
        return () => clearInterval(interval);
    })

    return(
        <>
            <LostContainer />
        </>
    )
}

export default Lost;