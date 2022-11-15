import { useNavigate, useRouteError, useLocation } from 'react-router-dom';

import { ROUTES, ALIEN, ERRORS } from '../../../constants';

import './styles.css';

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <article className="front-block error-page">
            <h1 className="title title--alien">Unexpected error occured</h1>
            <p className="error-page__error error-page__text">
                <i>{(error && (error.statusText || error.message)) || ERRORS.unknownBehaviour}</i>
            </p>
            <p className="error-page__subtitle error-page__text">Here we go again... {ALIEN}</p>
            <button className="button" onClick={() => {
                navigate(location.pathname === ROUTES.registrationFailed ? ROUTES.registration : ROUTES.login);
            }}>
                {location.pathname === ROUTES.registrationFailed ? 'Try again' : 'To Login'}
            </button>
        </article>
    );
}