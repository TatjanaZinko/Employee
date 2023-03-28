import * as yup from 'yup';

export const userSchema = yup.object().shape({
    login: yup
        .string()
        .matches(/^[A-Za-z0-9]{3,16}$/ , "Login should be 3-16 characters")
        .required("Login shouldn't be empty"),
    password: yup
        .string()
        .trim()
        .matches(/^[A-Za-z0-9]{8,20}$/ , "Password should be 8-20 letters or numbers")
        .required("Password shouldn't be empty"),
});