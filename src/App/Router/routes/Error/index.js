import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <article>
            <h1>Unexpected error occured</h1>
            <p>Here we go again...</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </article>
    )
}