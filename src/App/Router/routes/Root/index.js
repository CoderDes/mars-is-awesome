import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Printer from '../../../components/Printer';

import { AuthContext } from '../../../context/auth';
import { logout } from '../../../services/authService';

import { ROUTES, MAIN_PAGE_TEXT } from '../../../constants'; 

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
                <p className="text main__text">
                    <Printer text={MAIN_PAGE_TEXT}/>
                </p>
                <button className="button main__button" onClick={handleLogout}>Logout</button>
            </div>
        </main>
    );
}