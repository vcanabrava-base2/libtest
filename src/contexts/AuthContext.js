import React from 'react';
import { Platform } from 'react-native';
import Auth from '../api/Auth';
import appleAndroidSignIn from '../federated/appleAndroidSignIn';
import appleiOSSignIn from '../federated/appleiOSSignIn';
import googleSignIn, {googleSignOut} from '../federated/googleSignIn';
import UserData from '../local/UserData';

const Context = React.createContext({});

export class AuthStore extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state =
        {
            token: '',
            authType: '',
            error: undefined,
            loading: false
        }
    }
  
    load = async () => 
    {
        const userData = await UserData.read();
        this.setState({...userData});
        if(userData.token !== '') await Auth.setToken(userData.token);
    }

    render = () =>
    (
        <Context.Provider 
            value=
            {{
                ...this.state, 
                login: this.login, 
                logout: this.logout, 
                load: this.load, 
                googleLogin: this.googleLogin,
                appleLogin: this.appleLogin
            }}>
            {this.props.children}
        </Context.Provider>
    )

    login = async (user, pass) =>
    {
        try
        {
            this.setState({loading: true})
            const result = await Auth.login({user, pass});
            await this.onSuccessfullLogin(result.data.token, result.data.authType);
        }
        catch(err)
        {
            console.log(err.message);
            this.setState(
                {
                    error: err.message,
                    loading: false
                }
            )
        }
    }

    googleLogin = async () =>
    {
        try 
        {
            this.setState({loading: true})
            const token = await googleSignIn();
            if(token === undefined) this.setState({loading: false});
            else await this.onSuccessfullLogin(token, 'A');
        }
        catch
        {
            this.setState(
                {
                    error: 'Erro inesperado do Google',
                    loading: false
                }
            )
        }
    }

    appleLogin = async () =>
    {
        try 
        {
            this.setState({loading: true});
            const token = Platform.OS === 'android' ? await appleAndroidSignIn() : await appleiOSSignIn();
            if(token === undefined) this.setState({loading: false});
            else await this.onSuccessfullLogin(token, 'B');
        }
        catch
        {
            this.setState(
                {
                    error: 'Erro inesperado da Apple',
                    loading: false
                }
            )
        }
    }

    onSuccessfullLogin = async (token, authType) =>
    {
        this.setState(
            {
                token: token,
                authType: authType,
                loading: false,
                error: undefined
            }
        )
        await UserData.writeToken(token);
        await UserData.writeType(authType);
    }

    logout = async () =>
    {
        this.setState({token: '', authType: ''});
        Auth.setToken(null);
        await UserData.clear();
        await googleSignOut();
    }
}

export default Context;