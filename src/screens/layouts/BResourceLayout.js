import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import strings from '../strings';

export default ({title, onClickBack}) =>
(
    <ScreenContainer>
        <Card>
            <Text>
                {title}
            </Text>
            <Button title={strings.BACK} onPress={onClickBack}/>
        </Card>
    </ScreenContainer>
)