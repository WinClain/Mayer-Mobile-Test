import React, { useEffect, useState } from 'react';
import { Center, View, Text, Button } from 'native-base';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth';
import { State } from 'react-native-gesture-handler';

export const HomeScreen = props => {
    const [user,setUser] = useState(useSelector(state => state.auth.user));
    console.log(user)
    
    return (
        <Center flex={1}>
            <Text>{user.username}</Text>
            <Button onPress={()=>props.navigation.navigate('Logout')}>Logout</Button>
            <Text>You're Login</Text>
        </Center>
    )
}

export default HomeScreen;