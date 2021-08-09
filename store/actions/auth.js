export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
import URL from '../../constants/URL';
import { AsyncStorage } from 'react-native';

export const auth = (user, userProfile) => {
    return dispatch => {
        dispatch({type:AUTHENTICATE,user:user,userProfile:userProfile});
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        try{
            const response = await fetch(
                'http://'+ URL +':8000/api/login',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
                }
            );
        
            const resData = await response.json();
            if(resData.status === 'error'){
                throw resData.error;
            }

            dispatch(
                auth(
                resData.user,
                resData.userProfile,
                )
            );

            saveData(resData.user,resData.userProfile);
        }catch (e){
            console.log(e);
        }
    };
};

export const signUp =  async (email,name,password) => {
    const res = fetch('http://'+ URL +':8000/api/register',
    {
        method:'POST',
        body: JSON.stringify({
            email:email,
            name:name,
            password:password
        })
    })
}

const saveData = (user,userProfile) => {
    AsyncStorage.setItem('user',JSON.stringify(user));
    AsyncStorage.setItem('userProfile',JSON.stringify(userProfile));
}