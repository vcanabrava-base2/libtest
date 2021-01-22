import React, {useState, useRef} from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { AppleButton } from '@invertase/react-native-apple-authentication';

import strings from '../strings';
import styles from '../styles';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelledInput from '../components/LabelledInput';
import ScreenContainer from '../components/ScreenContainer';



export default ({onSubmit, error, loading, onGoogleSignIn, onAppleSignIn}) =>
{
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const passField = useRef();

    const screen =
    (
        <KeyboardAvoidingView
            style={{flex: 1}} 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <ScreenContainer>
                <Card>
                    <LabelledInput
                        value={user}
                        onChangeText={v => setUser(v)}
                        onSubmitEditing={() => passField.current.focus()}
                        label={strings.USER}
                        blurOnSubmit={false}
                        placeholder={'Usuário'}
                    />
                    <LabelledInput
                        value={pass}
                        onChangeText={v => setPass(v)}
                        onSubmitEditing={onSubmit.bind(this, user, pass)}
                        label={strings.PASS}
                        ref={passField}
                        blurOnSubmit={false}
                        placeholder={'Senha'}
                    />
                    <Button
                        loading={loading}
                        title={strings.LOGIN}
                        onPress={onSubmit.bind(this, user, pass)}
                    />
                    <View style={styles.googleButton}>
                        <GoogleSigninButton 
                            onPress={onGoogleSignIn}
                        />
                    </View>
                    <View style={styles.appleButton}>
                        <AppleButton
                            buttonStyle={AppleButton.Style.BLACK}
                            buttonType={AppleButton.Type.SIGN_IN}
                            onPress={onAppleSignIn}
                        />
                    </View>
                    {error && 
                    <Text style={styles.errorText}>
                        {error}    
                    </Text>}
                </Card>
            </ScreenContainer>
        </KeyboardAvoidingView>
    )

    return screen;
}