import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/MainScreens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LogoutScreen from '../screens/LogoutScreen';
import UserNavigation from './MainNavigations/UserNavigation';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {

    return (
        <Tab.Navigator screenOptions={{

        }}>
            <Tab.Screen name='User' component={UserNavigation}/>
        </Tab.Navigator>
    )

}

export default MainNavigation;