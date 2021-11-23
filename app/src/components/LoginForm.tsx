import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import FormBuilder from "./FormBuilder"
import {formConfigIterface} from '../formConfig'
import { addUserDataToStore } from "../store/actions/addUserDataToStore"
import { userInfoType } from '../store/types/index'
import { useNavigate } from 'react-router-dom'

type Props = { 
    formLoginConfig: formConfigIterface[];
}

const LoginForm:React.FC<Props> = ({ formLoginConfig }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userRedux = useSelector(({registration}:any) => registration.user)

    const sendDataToParent = (param: userInfoType) => {

        localStorage.setItem(
            'userLogin', JSON.stringify(param)
        );

        const userInfo:userInfoType = {
            login: param.login,
            email: param.email,
            password: param.password
        }
        dispatch(addUserDataToStore(userInfo))

        const getLocalStorage= localStorage.getItem("userRegistration")
        
        if (!getLocalStorage) {
            navigate("/registration")
        } else {
            const parsedLocalStorage = getLocalStorage && JSON.parse(getLocalStorage);
            parsedLocalStorage.email === userRedux.email && parsedLocalStorage.password === userRedux.password)
            navigate("/products")
        }

    }


    return(
        <form className="login-form">
            <h1 className="login-form__heading">Member Login</h1>

            <FormBuilder 
                formConfig={formLoginConfig} 
                sendDataToParent={sendDataToParent}
            />

            <Link className="login-form__forget" to="/registration">
                Forgot Password?
            </Link>

        </form>
    )
}

export default LoginForm