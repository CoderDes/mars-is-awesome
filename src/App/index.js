import { RouterProvider } from 'react-router-dom';

import Router from './Router';

import Mars from './mars.svg'
import './App.css';


function App() {
  const isAuthorized = true;
  return (
    <div className="App">
      { isAuthorized ? <img src={Mars} alt="Mars" className="Mars" /> : null }
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
