import { useState, useEffect, useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

import Router from './Router';
import { AuthContext } from './context/auth';

import Mars from './mars.svg'
import './App.css';


function App() {
  const [isAuthorized, setAuth] = useState(false);

  return (
    <div className="App">
      { !isAuthorized ? <img src={Mars} alt="Mars" className="Mars" /> : null }
      <AuthContext.Provider value={{isAuthorized, setAuth}}>
        <RouterProvider router={Router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
