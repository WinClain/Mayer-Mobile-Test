import React,{useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {AsyncStorage} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as AuthActions from '../store/actions/auth'
import HomeScreen from '../screens/SturtupScreen';
import LogoutScreen from '../screens/LogoutScreen';
import SturtupScreen from '../screens/SturtupScreen';
import UserNavigation from './MainNavigations/UserNavigation';

const Stack = createStackNavigator();


export const AppNavigation = () => {
    const isAuth = useSelector(state => state.auth.user);


    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}>
                {useSelector(state => state.auth.user) === null ? 
                <Stack.Screen name='Auth' component={AuthNavigation} />
                : 
                <Stack.Screen name='Main' component={MainNavigation} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation;