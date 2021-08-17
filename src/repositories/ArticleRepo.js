import Client from './Clients/axiosClient';
const artikel = '/home/artikel-terbaru';

export default {
    get(param) {
        return Client.get(`${artikel}?${param}`);
    }
}