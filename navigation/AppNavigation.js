import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {AsyncStorage} from 'react-native';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const userAuth = async dispatch => {
    try{  
        let user = await AsyncStorage.getItem('user');  
        if(!user){
            console.log(user);
        }else{
            
        }
    }catch(error){  
        alert(error)  
    }  
}

export const AppNavigation = () => {

    userAuth()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}>
                <Stack.Screen name='Auth' component={AuthNavigation} />
                <Stack.Screen name='Main' component={MainNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation;