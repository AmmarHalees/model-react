import api from './api';


export function getUser(userid) {
    return api.get(`/users/${userid}`,{
        // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }
    })
    .then((response) => {return response.data});
}