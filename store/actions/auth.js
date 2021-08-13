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
                'http://'+ URL +':8000/api/register',
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
    console.log(123);
    
        return async dispatch => {
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('userProfile');
            dispatch({type:LOGOUT})
        };
        
}

const saveData = (user,userProfile) => {
    AsyncStorage.setItem('user',JSON.stringify(user));
    AsyncStorage.setItem('userProfile',JSON.stringify(userProfile));
}