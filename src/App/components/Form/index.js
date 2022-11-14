import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { ERRORS, KEYBOARD_KEYS, ROUTES } from '../../constants';
import { isStringHtml, obscureString } from '../../services/stringService';
import './styles.css';


export default function AuthForm({isLogin, submitHandler}) {
    const [passwordTrueVal, setPasswordTrueVal] = useState('');
    const [passwordDisplayVal, setPasswordDisplayVal] = useState('');
    const [isShift, setShift] = useState(false);
    const navigate = useNavigate();

    const initValues = {
        username: '',
        passwordDisplay: '',
        passwordTrue: '',
    };
    const validator = ({username, password}) => {
        const errors = {};
        if (!username) { 
            errors.username = ERRORS.required;
        }
        else if (isStringHtml(username)) {
            errors.username = ERRORS.stringHtml;
        }
        else if (!password) {
            errors.password = ERRORS.required;
        }
        else if (isStringHtml(password)) {
            errors.password = ERRORS.stringHtml;
        }
    }
    const handleSubmit = (values, {setSubmitting}) => {
        
    }

    const handlePass = (e) => {
        if (!e) {
            console.error(ERRORS.unknownBehaviour)
        }
        else if (e.key === KEYBOARD_KEYS.backspace) {
            setPasswordTrueVal(passwordTrueVal.slice(0, passwordTrueVal.length - 1))
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


    useEffect(() => {
        setPasswordDisplayVal(obscureString(`${passwordTrueVal}`)); 
    }, [passwordTrueVal]);

    return ( 
        <Formik 
            initialValues={initValues}
            validate={validator}
            onSubmit={handleSubmit}
        >
            {
              (formProps) => (
                <Form className="form">
                    <div className="form__inner-wrapper form__inner-wrapper--fields">
                        <Field
                            className="field"
                            tabIndex="1"
                            type="text" name="username" placeholder="username" 
                        />
                        <Field type="passowrd" name="password" value={passwordTrueVal} style={{display: 'none'}}/>
                        <Field
                            className="field"
                            type="text" 
                            name="fakePassword"
                            tabIndex="2"
                            placeholder="password"
                            onKeyDown={handlePass}
                            value={passwordDisplayVal}
                        />
                    </div>
                    <div className="form__inner-wrapper">
                        <button tabIndex="3" className={`button button--line ${isLogin ? 'button--active' : ''}`} onClick={() => navigate(ROUTES.root)}>Login</button>
                        <button tabIndex="4" className="button button--line" onClick={() => navigate(ROUTES.registration)}>Register</button>
                    </div>
                </Form>
              ) 
            }
        </Formik>
    );
}