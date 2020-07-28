import axios from 'axios';

console.log(process.env)
export function getTodos() {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts?key=${process.env.REACT_APP_IMAGE_API_KEY}`, {
        // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }
    })
        .then((response) => response.data);
}