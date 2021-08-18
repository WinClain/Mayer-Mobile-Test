export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
import URL from '../../constants/URL';
import { AsyncStorage } from 'react-native';

export const authenticate = (user, userProfile) => {
    return dispatch => {
        dispatch({type:AUTHENTICATE,user:user,userProfile:userProfile});
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
            let data = new URLSearchParams();
            data.append('email',email);
            data.append('password',password);
            const response = await fetch(
                'https://ms-wallet24.de/connection/mobile-app/sign-in',
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
            console.log(resData);
            console.log(resData['user']);
            if(resData.status === 'error'){
                throw new Error(resData.error);
            }

            dispatch(
                authenticate(
                    resData.user,
                    resData.userProfile,
                )
            );

            saveData(resData.user,resData.userProfile);
    };
};

export const signUp = (email,name,password) => {
    return async dispatch => {
            const response = await fetch(
                'https://ms-wallet24.de/connection/mobile-app/sign-up',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:name,
                    email: email,
                    password: password,
                })
                }
            );
        
            const resData = await response.json();
            if(resData.status === 'error'){
                throw new  Error(resData.error);
            }

            dispatch(
                authenticate(
                resData.user,
                resData.userProfile,
                )
            );

            saveData(resData.user,resData.userProfile);
    };
}

export const logout = () => {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('userProfile');
        return {type:LOGOUT};
}

const saveData = (user,userProfile) => {
    AsyncStorage.setItem('user',JSON.stringify(user));
    AsyncStorage.setItem('userProfile',JSON.stringify(userProfile));
}