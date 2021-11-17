import React,  { useState, useEffect } from 'react'
import FormField from './FormField'
import * as utils from '../utils'
// import { formConfigIterface} from '../formConfig'


// interface formConfigProps{ 
//     formConfig: formConfigIterface[];
// };

// const FormBuilder:React.FC<formConfigProps> = ({ formConfig }): React.ReactElement => {
const FormBuilder = ({formConfig}) => {

    const [formValues, setFormValues] = useState({});

    const onChangeValue = e => {
        const {value, name} = e.target

        setFormValues({...formValues, [name]: value})
    }

    const [formValuesError, setFormValuesError] = useState({})

    const checkingValid = (value, validationObj) => {
        for (const validation in validationObj) {
            switch (validation) {
                case "maxLength": 
                    return utils.checkMaxLength(value)
                case "minLength": 
                    return utils.checkMaxLength(value)
                default:
                    break
            }
        }
    }

    useEffect(() => {
        const errors = {...formValuesError};
        console.log(errors);
        console.log(formValues);

        for (const key in formValues) {
            const formValid = 
            errors[key] = checkingValid(formValues[key], )
        }
        setFormValuesError(errors);
    }, [formValues])

    const [textError, setTextError] = useState({})

    const checkValidation = () => {
        const newValuewError = {...formValuesError};
        
        for (const [key, value] of Object.entries(formValues)) {
            if((key === "name" || key === "login")) {
                newValuewError.key = utils.checkMinLength(value) && utils.checkMaxLength(value)
            } else if (key === "email") {
                newValuewError.key = utils.checkEmail(value)
            } else if (key === "password") {
                newValuewError.key = utils.checkPassword(value)
            } else if (key === "confirmedPassword"){
                newValuewError.key = utils.checkConfirmedPassword(value, formValues.password)
            }
        }

        setFormValuesError(newValuewError)
        console.log(newValuewError)
        // const valid = {
        //     // login: utils.checkMinLength(formValues.login) 
        //     //     && utils.checkMaxLength(formValues.login),
        //     // password: utils.checkPassword(formValues.password),
        //     // email: utils.checkEmail(formValues.email)
        // }
        // console.log(formValues)
        // formValues.map(obj => {
        //     // if (obj)
        //     if (obj.name === "name" && obj.name === "login") {
        //         valid.login: utils.checkMinLength()
        //     } else if (obj.name === "password") {
        //         valid.password
        //     } else if (obj.name === "email") {
        //         valid.email
        //     }    
        // }

        // setFormValuesError(valid)
    
    }

        const submitRegisterForm = () => {

            checkValidation();
        //     let messageError = {}
        //     for (const error in formValuesError) {
                
        //         if(error === "login" && formValuesError[error]){
        //             messageError.name = 'Enter min 3 and max 22 symbols'
        //         } else if (error === 'password' && formValuesError[error]) {
        //             messageError.password = 'Please, enter min 6 symbols'
        //         }
        //     }
        //     setTextError(messageError)
        }

    return(
        <>
            {formConfig.map(obj => 
                <FormField 
                    key={obj.placeholder}
                    name={obj.name}
                    type={obj.type}
                    placeholder={obj.placeholder}
                    onChange={onChangeValue}
                /> 
            )}

            <button className='registration-form__btn'
                type="button" value="LOGIN"
                onClick={submitRegisterForm}
                >
                    LOGIN
            </button>
        </>
    )
    

}

export default FormBuilder