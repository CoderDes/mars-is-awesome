import { createContext } from 'react';

export const AuthContext = createContext({
    isAuthorized: false, 
    setAuth: () => { console.log('This is default auth context handler'); },
});