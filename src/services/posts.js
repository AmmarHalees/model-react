import axios from 'axios';

export function getPosts(albumId) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/photos?key=${process.env.REACT_APP_IMAGE_API_KEY}&albumId=${albumId}`, {

             // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }

    })
        .then((response) => response.data);
}
