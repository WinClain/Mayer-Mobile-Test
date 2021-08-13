import React,{useEffect} from 'react';
import { View, Text } from 'native-base';
import {AsyncStorage} from 'react-native';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../store/actions/auth'

export const LogoutScreen = props => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const tryLogout = async () => {
            dispatch(AuthActions.logout());
        }

        tryLogout();
    },[dispatch])


    return (
        <View flex={1} justifyContent='center' alignItems='center' bg='green.500'>
            <Text fontFamily='semi-bold' fontSize={50} color='green.700'>MS</Text>
        </View>
    )
}

export default LogoutScreen;