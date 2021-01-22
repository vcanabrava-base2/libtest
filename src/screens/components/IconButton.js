import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default ({name, onPress}) =>
(
    <TouchableOpacity onPress={onPress}>
        <Icon
            name={name}
            size={25}
            color={'#000'}
        />
    </TouchableOpacity>
)