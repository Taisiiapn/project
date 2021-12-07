export const checkEmail = (value:string) => {
    // eslint-disable-next-line
    const reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    return reg.test(value)
}