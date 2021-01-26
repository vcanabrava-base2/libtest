import mock from './client/mock';
import paths from './client/paths';

const defaultRequest = async boundRequest =>
{
    try
    {
        const response = await boundRequest();
        Auth.setToken(response.data.token);
        return response;
    }
    catch(err)
    {
        Auth.setToken(null);
        throw err;
    }
}

const Auth =
{
    setToken: token => mock.defaults.headers.common['Authorization'] = `Bearer ${token}`,
    login: async credentials => defaultRequest(mock.post.bind(this, paths.AUTH.LOGIN, credentials)),
    refresh: async () => defaultRequest(mock.get.bind(this, paths.AUTH.REFRESH))
}

export default Auth;