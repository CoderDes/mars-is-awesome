import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root';
import ErrorPage from './routes/Error';
import Auth from './routes/Authorization';
import RegisterSuccess from './routes/Authorization/RegisterSuccess';
import ForgotPassword from './routes/Authorization/ForgotPassword';

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
        element: <RegisterSuccess />
    },
    {
        path: ROUTES.registrationFailed,
        element: <ErrorPage />
    },
    {
        path: ROUTES.forgotPassword,
        element: <ForgotPassword />
    }
]);

export default router;