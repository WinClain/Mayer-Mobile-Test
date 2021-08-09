import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from 'react-native';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {


    checkUserAuth();

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}/>
        </Tab.Navigator>
    )

}

export default MainNavigation;