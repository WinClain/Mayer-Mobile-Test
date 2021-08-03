export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
import { Base64 } from "js-base64";
import axios from "axios";


export const signIn = (email,password) => {
    const res = fetch('http://127.0.0.1:8000/api/signup')
    .then((response) => response.json())
    .then((json) => console.log(json)); 
    
}

export const signUp = (email,password) => {

}