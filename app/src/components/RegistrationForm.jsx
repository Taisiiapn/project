import React, { useState } from "react"
import FormBuilder from './FormBuilder'
import { formRegisterConfig } from "../formConfig"

const RegistrationForm = () => {

    // const [formValues, setFormValues] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmedPassword: ''
    // })

    // const onChangeValue = e => {
    //     const {value, name} = e.target

    //     setFormValues({...formValues, [name]: value})
    //     console.log('run')
    // }

    // const [formValuesError, setFormValuesError] = useState({
    //     name: true,
    //     email:true,
    //     password: true,
    //     confirmedPassword: true
    // })

    // const [textError, setTextError] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmedPassword: ''
    // })

    // const checkValidation = () => {
        
    //     const valid = {
    //         name: utils.checkMinLength(formValues.name) && utils.checkMaxLength(formValues.name),
    //         email: utils.checkEmail(formValues.email),
    //         password: utils.checkPassword(formValues.password),
    //         confirmedPassword: formValues.password === formValues.confirmedPassword
    //     }
    //     setFormValuesError(valid);
    
    // }

    // const submitRegisterForm = () => {
    //     console.log('here')
    //     // checkValidation();
    //     let messageError = {}
    //     for (const error in formValuesError) {
            

    //         if(error === "name" && formValuesError[error]){
    //             messageError.name = 'Enter min 3 and max 22 symbols'
    //             console.log(messageError.name)
    //         } else if (error === 'email' && formValuesError[error]) {
    //             messageError.email = 'Please, enter valid email'
    //         } else if (error === 'password' && formValuesError[error]) {
    //             messageError.password = 'Please, enter min 6 symbols'
    //         } else if (error === 'confirmedPassword' && formValuesError[error]) {
    //             messageError.confirmedPassword = 'Please, confirm your password'
    //         }
    //         console.log(messageError)
            
    //     }
    //     setTextError(messageError)
    // }
    

    return(

        <form className="registration-form">
            <h1 className="registration-form__heading">Register</h1>

            <FormBuilder 
                config={formRegisterConfig}
    //             onChange={onChangeValue} 
    //             errorText={textError.name} 
            />  

            <button className='registration-form__btn'
                type="button" value="REGISTER" 
                // onClick={submitRegisterForm}
                >
                    REGISTER
            </button>


        </form>
    )
}

export default RegistrationForm