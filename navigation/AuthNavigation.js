import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import {useDispatch} from 'react-redux';
import {AsyncStorage} from 'react-native';

export const AuthNavigation = props => {
    const Stack = createStackNavigator();

    return (
            <Stack.Navigator screenOptions={{
                headerLeft:null,
                headerTitleAlign:'center',
                headerTitleStyle:{
                    fontFamily:'bold',
                    fontSize:24,
                },
            }}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Navigator>
    )
}

export default AuthNavigation;