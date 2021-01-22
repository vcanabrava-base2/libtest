import React from 'react';
import AResourceLayout from './layouts/AResourceLayout';
import strings from './strings';

export default ({navigation}) =>
(
    <AResourceLayout 
        onClickBack={() => navigation.goBack()}
    />
)