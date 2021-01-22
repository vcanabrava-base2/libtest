import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import LoginLayout from './layouts/LoginLayout';

export default () =>
{
    const auth = useContext(AuthContext);
    const screen =
    (
        <LoginLayout 
            onSubmit={auth.login} 
            error={auth.error}
            loading={auth.loading}
            onGoogleSignIn={auth.googleLogin}
            onAppleSignIn={auth.appleLogin}
        />
    )
    return screen;
}