import axios from 'axios';

export function getPosts(albumId) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com'}/photos?key=${process.env.REACT_APP_IMAGE_API_KEY || '17428591-c02da727b59c07792c7b09fd8'}&albumId=${albumId}`, {

             // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }

    })
        .then((response) => response.data);
}
