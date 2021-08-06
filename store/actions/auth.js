export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
import { Base64 } from "js-base64";
import axios from "axios";


export const signIn = (email,password) => {
    const res = fetch('http://192.168.88.246:8000/api/login',
    {
        method:'POST',
        body: JSON.stringify({
            email:email,
            password:password,
        })
    })
    .then((response)=>response.text())
    .then((re)=>console.log(re));
    
}

export const signUp = (email,name,password) => {
    const res = fetch('http://192.168.88.246:8000/api/register',
    {
        method:'POST',
        body: JSON.stringify({
            email:email,
            name:name,
            password:password
        })
    })
    .then((response)=>response.text())
    .then((re)=>console.log(re));
}