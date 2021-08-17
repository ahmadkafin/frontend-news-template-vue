import Client from './Clients/axiosClient';
const categories = '/home/categories';

export default {
    get() {
        return Client.get(`${categories}`);
    }
}