import React, { useEffect, useState } from 'react';
import { Center, View, Text, Button } from 'native-base';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth';
import { State } from 'react-native-gesture-handler';

export const HomeScreen = props => {
    const user = useSelector(state => state.auth.user);
    
    return (
        <Center flex={1}>
            {user ? <Text>{user.name}</Text> : ''}
            <Text>You're Login</Text>
            
        </Center>
    )
}

export default HomeScreen;