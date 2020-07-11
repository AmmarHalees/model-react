import api from './api';


export function getTodos(userid) {
    return api.get(`/users/${userid}`,{
        // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // }
    })
    .then((response) => {return response.data});
}