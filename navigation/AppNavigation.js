import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import { useSelector } from 'react-redux';
import LogoutScreen from '../screens/LogoutScreen';
import SturtupScreen from '../screens/SturtupScreen';

const Stack = createStackNavigator();


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}>
                <Stack.Screen name='Start' component={SturtupScreen} />
                {useSelector(state => state.auth.user) === null ? 
                <Stack.Screen name='Auth' component={AuthNavigation} />
                :
                <Stack.Screen name='Main' component={MainNavigation} />
                }
                {/* <Stack.Screen name='Logout' component={LogoutScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation;