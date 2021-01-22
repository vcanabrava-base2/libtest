import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import strings from '../strings';

export default ({onClickBack}) =>
(
    <ScreenContainer>
        <Card>
            <Text>
                Conteudo exclusivo para usuário A, que não acessa APi
            </Text>
        </Card>
        <Card>
            <Button title={strings.BACK} onPress={onClickBack}/>
        </Card>
    </ScreenContainer>
)