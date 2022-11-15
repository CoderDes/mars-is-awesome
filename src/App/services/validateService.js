import { ERRORS, AUTH } from '../constants';
import { isStringHtml } from './stringService';

export const validateStr = (value) => {
    let error = '';
    if (!value) { 
        error = ERRORS.required;
    }
    else if (isStringHtml(value)) {
        error = ERRORS.stringHtml;
    }
    return error;
}

export const validateUsernameServ = (username) => {
    let error = validateStr(username);
    if (username.length < AUTH.minLen) {
        error = ERRORS.shortInput;
    }
    else if (username.length > AUTH.maxLen) {
        error = ERRORS.longInput;
    }
    return error;
}

export const validatePasswordServ = (password) => {
    let error = validateStr(password);
    if (password.length < AUTH.minLen) {
        error = ERRORS.shortInput;
    }
    else if (password.length > AUTH.maxLen) {
        error = ERRORS.longInput;
    }
    return error;
};