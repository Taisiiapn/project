import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import FormBuilder from './FormBuilder'
import { formConfigIterface} from '../formConfig'
import { addUserDataToStore } from "../store/actions/addUserDataToStore";
import { useNavigate } from 'react-router-dom'
import { userInfoType } from '../store/types/index'

interface formConfigProps{
    formRegisterConfig: formConfigIterface[]
}

const RegistrationForm:React.FC<formConfigProps> = ({ formRegisterConfig }) : React.ReactElement=> {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const sendDataToParent = (param: any) => {

        localStorage.setItem(
            'userRegistration', JSON.stringify(param)
        );

        const userInfo:userInfoType = {
            name: param.name,
            email: param.email,
            password: param.password
        }
        dispatch(addUserDataToStore(userInfo))

        navigate("/");
    }


    return(

        <form className="registration-form">
            <h1 className="registration-form__heading">Register</h1>

            <FormBuilder 
                formConfig={formRegisterConfig}
                sendDataToParent={sendDataToParent}
            />


        </form>
    )
}

export default RegistrationForm