import React from 'react'

interface props {
    value: string,
    type: string,
    placeholder: string,
    name: string,
    errorText: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,

}

const FormField:React.FC<props> = (
    { value, type, placeholder, onChange, name, errorText }
    ) : React.ReactElement => {
    return(
        <p>
            <input 
                value={value}
                name={name}
                type={type}
                className={errorText 
                    ? 'registration-form__input--red' 
                    : 'registration-form__input'}
                placeholder={placeholder}
                onChange={onChange}      
                required />

                {errorText 
                    && <span className='registration-form__input-error'>
                        {errorText}
                        </span>}
        </p>
    )
}

export default FormField