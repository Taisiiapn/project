import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import FormBuilder from "./FormBuilder"
import {formConfigIterface} from '../formConfig'
import { addUserDataToStore } from "../store/actions/addUserDataToStore"

type Props = { 
    formLoginConfig: formConfigIterface[];
}

const LoginForm:React.FC<Props> = ({ formLoginConfig }) => {

    const dispatch = useDispatch()

    const sendDataToRedux = (param: any) => {

        localStorage.setItem(
            'userLogin', JSON.stringify(param)
        );

        const userInfo = {
            login: param.login,
            email: param.email,
            password: param.password
        }
        dispatch(addUserDataToStore(userInfo))
    } 

    return(
        <form className="login-form">
            <h1 className="login-form__heading">Member Login</h1>

            <FormBuilder 
                formConfig={formLoginConfig} 
                sendDataToRedux={sendDataToRedux}
            />

            <Link className="login-form__forget" to="/registration">
                Forgot Password?
            </Link>

        </form>
    )
}

export default LoginForm