import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import allDataContext from './common/contexts/allDataContext';

import routes from './Routes';
import getAllData from './common/requests/getAllData';

const App = () => {

  // Le state qui est dédié au contexte 'allDataContext'.
  const [allData, setAllData] = useState([]);

  // Fonction qui permet de récupérer toutes les excuses
  // dans le backend.
  const getData = async () => {
    const allData = await getAllData();
    setAllData(allData);
  }; 

  // Exécuter une fois, lorsque la page a fini de charger, 
  // il permet de lancer la fonction "getData"
  useEffect(() => {
    getData();
  }, [])

  return (
    <allDataContext.Provider value={{ allData, setAllData }}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route?.path}
            exact={route?.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </allDataContext.Provider>
  );
}

export default App;