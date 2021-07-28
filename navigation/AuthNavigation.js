import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export const AuthNavigation = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                
            }}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;