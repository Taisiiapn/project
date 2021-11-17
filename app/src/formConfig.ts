import { checkMaxLength } from "./utils"
// export interface formConfigIterface {
//     name: string,
//     type: string,
//     placeholder: string
// }

// export const formConfig: formConfigIterface[] =
export const formLoginConfig =
[
    {
        name: "login", 
        type: "text",
        placeholder: "Enter your username",
        validation: {
            maxLength: 22,
            minLength: 6
        }
    },
    {
        name: "password", 
        type: "password",
        placeholder: "Enter your password",
        validation: {    minLength: 6
        }
    },

]


export const formRegisterConfig =
[
    {
        name: "name", 
        type: "text",
        placeholder: "Enter your name"
    },
    {
        name: "email", 
        type: "email",
        placeholder: "Enter your email"
    },
    {
        name: "password", 
        type: "password",
        placeholder: "Enter your password"
    },
    {
        name: "confirmedPassword", 
        type: "password",
        placeholder: "Confirm password"
    }
]