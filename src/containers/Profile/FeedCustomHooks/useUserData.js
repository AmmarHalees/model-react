import { useState, useEffect } from 'react';
import { getUser } from '../../../services/user';

export default function useUserData(userId) {


    const [loading, setLoading] =useState(false);

    const [user, setUser] = useState({});
    useEffect(() => {

        setLoading(true)
        getUser(userId).then((response) => { //2 is the userId

            setLoading(false)
            setUser(response);

        });

    }, [userId]); //Album id is the dependancy which change in value determines whether or not useeffect should re-run

    // return [posts, setPosts]

    return [user,loading];

}