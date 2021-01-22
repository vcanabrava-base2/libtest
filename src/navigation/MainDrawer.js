import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';
import LogoutContainer from '../screens/LogoutContainer';
import strings from '../screens/strings';

const Drawer = createDrawerNavigator();

export default () =>
(
    <Drawer.Navigator>
        <Drawer.Screen name={strings.ROUTES.home} component={MainStack} options={{title: 'HOME'}}/>
        <Drawer.Screen name={strings.ROUTES.logout} component={LogoutContainer} options={{title: strings.LOGOUT}}/>
    </Drawer.Navigator>
)