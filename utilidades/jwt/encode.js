export const encode = (token)=>{
    const data=token.split(".")
    return JSON.parse(atob(data[1]))
}
