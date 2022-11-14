import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root';
import ErrorPage from './routes/Error';
import Login from './routes/Authorization/Login';
import Register from './routes/Authorization/Register';

import { ROUTES } from '../constants';

const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: ROUTES.login,
        element: <Login />,
    },
    {
        path: ROUTES.registration,
        element: <Register />
    }
]);

export default router;