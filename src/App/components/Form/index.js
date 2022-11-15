import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { ERRORS, KEYBOARD_KEYS, ROUTES } from '../../constants';
import { obscureString } from '../../services/stringService';
import { login, register } from '../../services/authService';
import { validateUsernameServ, validatePasswordServ } from '../../services/validateService';
import { AuthContext } from '../../context/auth';

import './styles.css';


export default function AuthForm({isLoginForm, toggleLoginForm}) {
    const [passwordTrueVal, setPasswordTrueVal] = useState('');
    const [passwordFakeVal, setPasswordFakeVal] = useState('');
    const [isShift, setShift] = useState(false);

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const initValues = {
        username: '',
        passwordFake: passwordFakeVal,
        passwordTrue: passwordTrueVal,
    };

    const validateUsername = (val) => {
        if (typeof val === 'string') {
            return validateUsernameServ(val);
        }
    }

    const validatePassword = () => {
        return validatePasswordServ(passwordTrueVal);
    };

    const handleSubmit = async (values) => {
        if (isLoginForm) {
            const result = await login(values);
            if (result.success) {
                authCtx.setAuth(true);
                console.log(authCtx);
                navigate(ROUTES.root);
            }
            return;
        }
        const result = await register(values);
        if (result.success) {
            navigate(ROUTES.registrationSuccess);
            return;
        }
        navigate(ROUTES.registrationFailed);
    }

    const handlePass = (e) => {
        if (!e) {
            console.error(ERRORS.unknownBehaviour);
        }
        else if (e.key === KEYBOARD_KEYS.backspace) {
            setPasswordTrueVal(passwordTrueVal.slice(0, passwordTrueVal.length - 1));
        }
        else if (e.key === KEYBOARD_KEYS.shift) {
            setShift(true);
        }
        else if (e.keyCode >= 48 && e.keyCode <= 90){
            const char = e.key;
            setPasswordTrueVal(`${passwordTrueVal}${isShift ? char.toUpperCase() : char}`);
            setShift(false);
        }
    };

    const changeForm = (resetFormCallback) => {
        toggleLoginForm(!isLoginForm);
        resetFormCallback();
        navigate(isLoginForm ? ROUTES.registration : ROUTES.login);
    }

    useEffect(() => {
        setPasswordFakeVal(obscureString(`${passwordTrueVal}`)); 
    }, [passwordTrueVal]);

    return ( 
        <Formik 
            initialValues={initValues}
            validate={validateUsername}
            onSubmit={handleSubmit}
        >
            {
              ({values, errors, resetForm}) => (
                <Form className="form">
                    <div className="form__inner-wrapper form__inner-wrapper--col">
                        <Field
                            className={errors.username ? "field field--error" : "field"}
                            tabIndex="1"
                            type="text" name="username" placeholder="Username"
                            validate={validateUsername}
                        />
                        {
                            errors.username ?
                            <div className="field__error">
                                {errors.username}
                            </div>
                            : null
                        }
                        <Field
                            className="field"
                            type="text" 
                            name="passwordFake"
                            tabIndex="2"
                            placeholder="Password"
                            onKeyDown={handlePass}
                            value={passwordFakeVal}
                            validate={validatePassword}
                        />
                        {
                            errors.passwordFake ?
                            <div className="field__error">
                                {errors.passwordFake}
                            </div>
                            : null
                        }
                    </div>
                    <div className="form__inner-wrapper form__inner-wrapper--col">
                        <button
                            type="button"
                            tabIndex="3" 
                            className="button button--half" 
                            onClick={handleSubmit}>
                                {isLoginForm ? 'Login' : 'Register'}
                        </button>
                        <button
                            type="button"
                            tabIndex="4"
                            className="button button--half"
                            onClick={() => changeForm(resetForm)}
                        >
                            {`Go to ${isLoginForm ? 'registration' : 'login' } page`}
                        </button>
                    </div>
                </Form>
              ) 
            }
        </Formik>
    );
}