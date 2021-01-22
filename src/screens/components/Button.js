import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Text, Platform, ActivityIndicator } from 'react-native';
import styles from '../styles'

export default ({title, onPress, loading}) =>
{
    if(loading)
    {
        const button =
        ( 
            <View style={styles.button}>
                <ActivityIndicator color='white'/>
            </View>
        )
        return button;
    }

    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const button =
    (
        
        <Touchable onPress={onPress}>
            <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
            </View>
        </Touchable>
    )

    return button;
}