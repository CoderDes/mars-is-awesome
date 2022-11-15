import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/auth';
import { logout } from '../../../services/authService';

import { ROUTES } from '../../../constants'; 

import './styles.css';

export default function Root() {
    const ctx = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!ctx.isAuthorized) {
            navigate(ROUTES.login);
        }
    }, []);

    const handleLogout = async () => {
        const result = await logout();
        if (result.success) {
            ctx.setAuth(false);
            navigate(ROUTES.login);
        }
    }


    return (
        <main className="main">
            <div className="main__content">
                <p className="text main__text">На Марсе классно...</p>
                <button className="button" onClick={handleLogout}>Logout</button>
            </div>
        </main>
    );
}