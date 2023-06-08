import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '560b9f250d3e435e8eb1c4d62e43e7c8',
    }
})