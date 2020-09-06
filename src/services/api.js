import axios from 'axios';
export default axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 1000
});

