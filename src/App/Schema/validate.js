import * as Yup from 'yup';

import { AUTH, ERRORS } from '../constants/index';

export const AuthSchema = Yup.object().shape({
    username: Yup.string()
        .min(AUTH.usernameMinLength, ERRORS.shortInput)
        .max(AUTH.usernameMaxLength, ERRORS.longInput)
        .required(ERRORS.required),
    password: Yup.string()
        .min(AUTH.passwordMinLength, ERRORS.shortInput)
        .max(AUTH.passwordMaxLength, ERRORS.longInput)
        .required(ERRORS.required),
});