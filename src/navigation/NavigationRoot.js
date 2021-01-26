import React, { useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import LoginContainer from '../screens/LoginContainer';
import MainDrawer from './MainDrawer';

export default () =>
{
    const auth = useContext(AuthContext);

    if(auth.token === '') return (<LoginContainer/>);
    console.log('Aprooved because token was: ' + auth.token);
    
    const root =
    (
        <NavigationContainer>
            <MainDrawer/>
        </NavigationContainer>
    )

    return root;
}