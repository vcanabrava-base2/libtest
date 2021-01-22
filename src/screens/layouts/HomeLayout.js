import React from 'react';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import strings from '../strings';

export default ({allowances, onClickA, onClickB}) =>
(
    <ScreenContainer>
        {allowances.A && <Button title={strings.EXCLUSIVE_A} onPress={onClickA}/>}
        {allowances.B && <Button title={strings.EXCLUSIVE_B} onPress={onClickB}/>}
    </ScreenContainer>
)