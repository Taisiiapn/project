import React from 'react'

const FormField = ({ type, placeholder, onChange, name, errorText }) => {
    
    return(
        <p>
            <input 
                name={name}
                type={type}
                // className={errorText 
                //     ? 'registration-form__input--red' 
                //     : 'registration-form__input'}
                placeholder={placeholder}
                onChange={onChange}      
                required />

                {/* {errorText 
                    && <span className='registration-form__input-error'>
                        {errorText}
                        </span>} */}
        </p>
    )
}

export default FormField