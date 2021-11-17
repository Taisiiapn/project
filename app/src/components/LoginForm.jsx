import React from "react"
import { Link } from "react-router-dom"
import FormBuilder from "./FormBuilder"

const LoginForm = ({formLoginConfig}) => {
    

    // const [formValuesError, setFormValuesError] = useState({
    //     login: true,
    //     password: true
    // })

    // const [textError, setTextError] = useState({
    //     login: '',
    //     password: ''
    // })

    // const checkValidation = () => {

    //     const valid = {
    //         login: utils.checkMinLength(formValues.login) 
    //             && utils.checkMaxLength(formValues.login),
    //         password: utils.checkPassword(formValues.password)
    //     }
    //     setFormValuesError(valid);
    
    // }

    // const submitRegisterForm = () => {

    //     checkValidation();
    //     let messageError = {}
    //     for (const error in formValuesError) {
            
    //         if(error === "login" && formValuesError[error]){
    //             messageError.name = 'Enter min 3 and max 22 symbols'
    //         } else if (error === 'password' && formValuesError[error]) {
    //             messageError.password = 'Please, enter min 6 symbols'
    //         }
    //     }
    //     setTextError(messageError)
    // }

    return(
        <form className="login-form">
            <h1 className="login-form__heading">Member Login</h1>

            <FormBuilder formConfig={formLoginConfig} />

            <Link className="login-form__forget" to="/registration">
                Forgot Password?
            </Link>

        </form>
    )
}

export default LoginForm