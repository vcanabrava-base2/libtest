import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../screens/HomeContainer';
import AResourceContainer from '../screens/AResourceContainer';
import BResourceContainer from '../screens/BResourceContainer';
import strings from '../screens/strings';
import IconButton from '../screens/components/IconButton';

const Stack = createStackNavigator();

export default () =>
(
    <Stack.Navigator>
        <Stack.Screen 
            name={strings.ROUTES.home} 
            component={HomeContainer} 
            options=
            {
                ({navigation}) =>
                (
                    {
                        headerLeft: () =>
                        (
                            <IconButton
                                name='menu'
                                onPress={navigation.openDrawer}
                            />
                        ),
                        title: 'HOME',
                        headerLeftContainerStyle: {paddingLeft: 16}
                    }
                )
            }/>
        <Stack.Screen name={strings.ROUTES.a} component={AResourceContainer} options={{title: strings.EXCLUSIVE_A}}/>
        <Stack.Screen name={strings.ROUTES.b} component={BResourceContainer} options={{title: strings.EXCLUSIVE_B}}/>
    </Stack.Navigator>
)