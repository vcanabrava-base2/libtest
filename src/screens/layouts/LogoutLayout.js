import React from 'react';
import Button from '../components/Button';
import LabelledInput from '../components/LabelledInput';
import ScreenContainer from '../components/ScreenContainer';
import strings from '../strings';

export default ({currentToken, onLogout, onClickBack}) =>
(
    <ScreenContainer>
        <LabelledInput
            label='Token atual'
            value={currentToken}
        />
        <Button title={strings.LOGOUT} onPress={onLogout}/>
        <Button title={strings.BACK} onPress={onClickBack}/>
    </ScreenContainer>
)