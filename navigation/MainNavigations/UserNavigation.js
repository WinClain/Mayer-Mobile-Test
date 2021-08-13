import React from 'react';
import HomeScreen from '../../screens/MainScreens/HomeScreen';
import LogoutScreen from '../../screens/LogoutScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import {logout} from '../../store/actions/auth'

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => logout()}
        />
      </DrawerContentScrollView>
    );
}

export const UserNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Logout' component={LogoutScreen}/>
        </Drawer.Navigator>
    )
}

export default UserNavigation;