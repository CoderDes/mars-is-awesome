import { useState } from 'react';

import Form from '../../../components/Form';
import { PAGE_TITLES } from '../../../constants';

import './styles.css'

export default function Auth({isLogin}) {
    const [isLoginForm, toggleLoginForm] = useState(isLogin);

    return (
        <article className="auth-wrapper front-block">
            <h1 className="title">{isLoginForm ? PAGE_TITLES.login : PAGE_TITLES.register}</h1>
            <Form isLoginForm={isLoginForm} toggleLoginForm={toggleLoginForm}/>
        </article>
    );
}