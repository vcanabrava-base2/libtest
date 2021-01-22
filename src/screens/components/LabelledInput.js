import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';

export default React.forwardRef((props, ref) =>
(   
    <View style={styles.input}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
            style={styles.field}
            ref={ref}
            {...props}
        />
    </View>
));