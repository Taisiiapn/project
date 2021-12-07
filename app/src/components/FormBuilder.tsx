import React,  { useState, useEffect } from 'react'
import FormField from './FormField'
import * as utils from '../utils'
import { formConfigIterface} from '../formConfig'
 
interface formBuilderProps{ 
    formConfig: formConfigIterface[];
    sendDataToParent?: (value: any) => void
};

interface propsValues{
    [name: string]: string
}

interface propsErorrs{
    [name: string]: boolean
}

interface propsErorrText{
    [name: string]: string
}

const FormBuilder:React.FC<formBuilderProps> = ({formConfig, sendDataToParent = () => {}}) : React.ReactElement => {

    const [formValues, setFormValues] = useState<propsValues>({})
    const [formValuesIsError, setFormValuesError] = useState<propsErorrs>({})
    const [textError, setTextError] = useState<propsErorrText>({})

    useEffect(() => {
        // eslint-disable-next-line
        formConfig.map(obj => {
            setFormValues(prevState => ({...prevState, [obj.name]: ''}))
            setFormValuesError(prevState => ({...prevState, [obj.name]: true}))
            setTextError(prevState => ({...prevState, [obj.name]: ''}))
        });


    }, [formConfig])
    
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target

        setFormValues({...formValues, [name]: value})
    }

    const submitRegisterForm = () => {
        const copyformValuesIsError:any = {...formValuesIsError}
        const copyTextError:propsErorrText = {...textError}

        // eslint-disable-next-line
        formConfig.map(obj => {
            const validationsKeys = Object.keys(obj.validation)
            const minLength = obj.validation.minLength
            const maxLength = obj.validation.maxLength
            const key = obj.name

                if (validationsKeys.includes('maxLength')) {
                    copyformValuesIsError[key] = !(utils.checkMinLength(formValues[key], minLength))
                    copyTextError[key] = copyformValuesIsError[key] ? `Please, enter between ${minLength} and ${maxLength} symbols` : ''
                }
                
                if (validationsKeys.includes('minLength')) {
                    copyformValuesIsError[key] = !(utils.checkMinLength(formValues[key], minLength))
                    copyTextError[key] = copyformValuesIsError[key] ? `Please, enter more than ${minLength} symbols` : ''
                } 
                
                if (validationsKeys.includes('regExp')) {
                    copyformValuesIsError[key] = !(utils.checkEmail(formValues[key]))
                    copyTextError[key] = copyformValuesIsError[key] ? 'Please, enter a valid email' : '';
                } 

                if (validationsKeys.includes('theSamePassword')) {
                    copyformValuesIsError[key] = !(utils.checkConfirmedPassword(formValues[key], formValues.password))
                    copyTextError[key] = copyformValuesIsError[key] ? 'Please, confirm your password' : '';
                }
            
        });

        setTextError(copyTextError)
        setFormValuesError(copyformValuesIsError)

        return(
            Object.values(copyTextError)
                .every(item => item === '')
        )
    
    }

    const sendSubmittedData = () => {
        submitRegisterForm() &&  sendDataToParent(formValues)
    }


    return(
        <>
            {formConfig && formConfig.map(obj => 
                <FormField 
                    value={formValues[obj.name] ? formValues[obj.name] : ''}
                    key={obj.placeholder}
                    name={obj.name}
                    type={obj.type}
                    placeholder={obj.placeholder}
                    onChange={onChangeValue}
                    errorText={textError[obj.name]}
                /> 
            )}

            <button className='registration-form__btn'
            type="button" value="LOGIN"
            onClick={sendSubmittedData}>
                SUBMIT
            </button>
        </>
    )
    

}

export default FormBuilder