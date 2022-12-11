import * as yup from 'yup';

export const loginForm = yup.object().shape({
    username: yup.string().required("Username is required for login "),
    password: yup.string().required("Password is required to login")

})