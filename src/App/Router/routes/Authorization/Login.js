import { useState, useEffect } from 'react';

import Form from '../../../components/Form';

import './styles.css'

export default function Login() {
    const [isLogin, setLogin] = useState(true);

    useEffect(() => {
        console.log("Component did mount");
        // TODO: check login state here;
        console.log("IS LOGIN", isLogin);
    }, []);

    return (
        <article className="wrapper">
            <h1 className="title">Login</h1>
            <Form />
        </article>
    );
}