import api from './api';
import { handleAuth, handleUser } from '../redux/actioncreators/actioncreators';


export function signIn(userid) {
    return api.get(`/users/${userid}`,{

    })
    // .then((response) => {return response.data});


    .then(res =>{

        handleAuth(true);
        handleUser(res.data)

    })
}