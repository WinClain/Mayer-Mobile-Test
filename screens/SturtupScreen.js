import React,{useState,useEffect} from 'react';
import { View, Text } from 'native-base';
import {AsyncStorage} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as AuthActions from '../store/actions/auth'

export const SturtupScreen = props => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const tryLogin = async () => {
            const result = await AsyncStorage.getItem('user');
            if(!result){
                props.navigation.navigate('Auth');
                return;
            } 

            const user = await JSON.parse(result);
            const profile = await AsyncStorage.getItem('userProfile');
            const userProfile = await JSON.parse(profile);
            console.log(123);
            

            dispatch(AuthActions.authenticate(user,userProfile));
            props.navigation.navigate('Main');
        }

        tryLogin();
    },[dispatch])


    return (
        <View flex={1} justifyContent='center' alignItems='center' bg='green.500'>
            <Text fontFamily='semi-bold' fontSize={50} color='green.700'>MS</Text>
        </View>
    )
}

export default SturtupScreen;