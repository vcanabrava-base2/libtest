const API = 'api';
const RESTRICTED = 'restricted';

const paths =
{
    ROOT: 'http://10.0.2.2:19000',

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