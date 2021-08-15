import React,{useEffect} from 'react';
import { View, Text } from 'native-base';
import {AsyncStorage, DevSettings} from 'react-native';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../store/actions/auth'

export const LogoutScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogout = async () => {
            await dispatch(AuthActions.logout());
            props.navigation.navigate('Auth');
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