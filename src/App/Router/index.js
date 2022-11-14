import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root';
import ErrorPage from './routes/Error';
import Auth from './routes/Authorization';

import { ROUTES } from '../constants';

const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: ROUTES.login,
        element: <Auth isLogin={true} />,
    },
    {
        path: ROUTES.registration,
        element: <Auth isLogin={false} />
    },
    {
        path: ROUTES.registrationSuccess,
        element: <div>SUCCESS REGISTERED</div>
    },
    {
        path: ROUTES.registrationFailed,
        element: <ErrorPage />
    }
]);

export default router;