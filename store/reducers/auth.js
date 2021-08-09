import { AUTHENTICATE, LOGOUT } from "../actions/auth";
import { AsyncStorage } from "react-native";

const initialState = {
    user: null,

}

export default (state = initialState,action) => {
    switch(action){
        case AUTHENTICATE:

        case LOGOUT:

        default:
            return state;
    }
}