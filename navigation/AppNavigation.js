import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import LogoutScreen from '../screens/LogoutScreen';
import SturtupScreen from '../screens/SturtupScreen';
import { AsyncStorage } from 'react-native';
import * as AuthActions from '../store/actions/auth'

const Stack = createStackNavigator();


export const AppNavigation = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const tryLogin = async () => {
            const result = await AsyncStorage.getItem('user');
            if(result === null){
                return;
            } 

            const user = await JSON.parse(result);
            const profile = await AsyncStorage.getItem('userProfile');
            const userProfile = await JSON.parse(profile);            

            await dispatch(AuthActions.authenticate(user,userProfile));
        }

        tryLogin();
    },[dispatch])

    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}>
                {/* <Stack.Screen name='Start' component={SturtupScreen} /> */}
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