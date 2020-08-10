import { useState, useEffect } from 'react';
import { getUser } from '../../../services/user';

export default function useUserData(userId) {

        /*---Too many set states are causing too many re-renders ---*/ /*---((NOTE))----*/


    const [loading, setLoading] =useState(false);
    const [error, setError] =useState(false);

    const [user, setUser] = useState({});
    useEffect(() => {

        setLoading(true);
        setError(false)

        getUser(userId).then((response) => { //2 is the userId

            setError(false);
            setLoading(false)
            setUser(response);

        })
        .catch((err)=>{

            setError(true);
            setLoading(false);
            setUser({})

        })

    }, [userId]); //Album id is the dependancy which change in value determines whether or not useeffect should re-run

    // return [posts, setPosts]

    return [user,loading,error];

}