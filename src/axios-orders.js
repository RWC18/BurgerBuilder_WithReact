import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-9af81.firebaseio.com/'
});

export default instance;