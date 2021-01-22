import mock from './client/mock';
import paths from './client/paths';

const Restricted =
{
    get: id => mock.get(`${paths.RESTRICTED.GET}/${id}`)
}

export default Restricted;