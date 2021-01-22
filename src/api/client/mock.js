import axios from 'axios';
import paths from './paths';

const config =
{
    baseURL: paths.ROOT,
    timeout: 5000
}

export default axios.create(config);