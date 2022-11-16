import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/index';

export default function RegisterSuccess() {
    const navigate = useNavigate();


    return (
        <article className="front-block auth-wrapper registration-success">
            <h1 className="title title--alien">
                You are forgot your password. I'm so sorry.
            </h1>
            <button className="button button--half" onClick={() => navigate(ROUTES.login)}>
                Try to remember
            </button>
        </article>
    );
}