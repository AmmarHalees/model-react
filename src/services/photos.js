import axios from 'axios';

export function getPhotos(query, type ='photo') {

    return axios.get(`${'https://pixabay.com/api/'}?key=${process.env.REACT_APP_PIXBAY_API_KEY || '17428591-c02da727b59c07792c7b09fd8'}&q=${query}&image_type=${type}`, {

             // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }

    })
        .then((response) => response.data.hits);
}
