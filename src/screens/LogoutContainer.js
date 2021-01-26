import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import LogoutLayout from './layouts/LogoutLayout';
import strings from './strings';

export default ({navigation}) =>
{
    const auth = useContext(AuthContext);
    return (<LogoutLayout currentToken={auth.token} onLogout={auth.logout} onClickBack={() => navigation.navigate(strings.ROUTES.home)}/>)
}