import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import allDataContext from '../common/contexts/allDataContext';
import { HomeContainer } from '../components';

const HttpCode = () => {
    const { httpCode } = useParams();
    const { allData } = useContext(allDataContext);
    const [widthData, setWithData] = useState(null);
    const navigate = useNavigate();

    // Éxécuter lorsque 'allData' est récupérer,
    // et vérifie si une data existe avec son code HTTP.
    // Si elle n'existe pas, on renvoie l'utilisateur sur la page 'I'm lost'
    useEffect(() => {
        if (allData.length > 0) {
            const dataSelected = allData.find(data => data.http_code === parseInt(httpCode));
            if (dataSelected === undefined) {
                navigate('/lost');
            }
            setWithData(dataSelected);
        }
    }, [allData, httpCode, navigate])

    return <HomeContainer withData={widthData} />;
}

export default HttpCode;