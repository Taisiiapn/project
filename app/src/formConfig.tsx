export interface formConfigIterface {
    name: string,
    type: string,
    placeholder: string,
    validation: {[name:string]:any}
}

export const formLoginConfig: formConfigIterface[] =
[
    {
        name: "login", 
        type: "text",
        placeholder: "Enter your username",
        validation: {
            maxLength: 22,
            minLength: 3,
        }
    },
    {
        name: "password", 
        type: "password",
        placeholder: "Enter your password",
        validation: {
            minLength: 6
        }
    },

]

export const formRegisterConfig: formConfigIterface[] =
[
    {
        name: "name", 
        type: "text",
        placeholder: "Enter your name",
        validation: {
            maxLength: 22,
            minLength: 3
        }
    },
    {
        name: "email", 
        type: "email",
        placeholder: "Enter your email",
        validation: {
            regExp: true
        }
    },
    {
        name: "password", 
        type: "password",
        placeholder: "Enter your password",
        validation: {
            minLength: 6
        }
    },
    {
        name: "confirmedPassword", 
        type: "password",
        placeholder: "Confirm password",
        validation: {
            theSamePassword: true
        }
    }
]