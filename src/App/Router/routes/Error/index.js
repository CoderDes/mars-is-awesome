import { useNavigate, useRouteError } from 'react-router-dom';

import { ROUTES, ALIEN, ERRORS } from '../../../constants';

import './styles.css';

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <article className="front-block error-page">
            <h1 className="title title--alien">Unexpected error occured</h1>
            <p className="error-page__error error-page__text">
                <i>{(error && (error.statusText || error.message)) || ERRORS.unknownBehaviour}</i>
            </p>
            <p className="error-page__subtitle error-page__text">Here we go again... {ALIEN}</p>
            {/* try again if prev route is registration */}
            <button className="button" onClick={() => navigate(ROUTES.registration)}>Try again</button>
        </article>
    )
}