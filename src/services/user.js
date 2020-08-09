import api from './api';


export function getUser(userid) {
    return api.get(`/users/${userid}`,{

    })
    .then((response) => {return response.data});
}