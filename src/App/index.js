import { useState, useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

import Router from './Router';
import { AuthContext } from './context/auth';

import Mars from './mars.svg'
import './App.css';


function App() {
  const [isAuth, setAuth] = useState(false);
  const ctx = useContext(AuthContext);

  return (
    <div className="App">
      { !isAuth ? <img src={Mars} alt="Mars" className="Mars" /> : null }
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
