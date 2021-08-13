import { AUTHENTICATE, LOGOUT } from "../actions/auth";
import { AsyncStorage } from "react-native";

const initialState = {
    user: null,
    profile: null
}

export const AuthReducer = (state = initialState,action) => {
    switch(action.type){
        case AUTHENTICATE:
            return {
                user: action.user,
                profile: action.userProfile
            }
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default AuthReducer;