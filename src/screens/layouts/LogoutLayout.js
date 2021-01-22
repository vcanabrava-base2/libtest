import React from 'react';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import strings from '../strings';

export default ({onLogout, onClickBack}) =>
(
    <ScreenContainer>
        <Button title={strings.LOGOUT} onPress={onLogout}/>
        <Button title={strings.BACK} onPress={onClickBack}/>
    </ScreenContainer>
)