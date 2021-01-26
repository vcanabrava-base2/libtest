const API = 'api';
const RESTRICTED = 'restricted';

const paths =
{
    ROOT: 'https://mock-server-the-canabrava.herokuapp.com',

    AUTH:
    {
        LOGIN: '/login',
        REFRESH: `/${API}/refresh`
    },

    RESTRICTED:
    {
        GET: `/${API}/${RESTRICTED}/get`,
    },
}

export default paths;