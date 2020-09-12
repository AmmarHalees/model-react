import { useState, useEffect } from 'react';
import Axios from 'axios';



function useProfileData (username){

    const [userObject, setUserObject] = useState({});

    const [userObjectLoading, setUserObjectLoading] = useState(true);
    
    const [userObjectError, setUserObjectError] = useState(false);
    
    
    useEffect(() => {
    
        setUserObjectLoading(true);
        // setUserObjectError(false);
    
        Axios({
    
            method: 'GET',
            url: `https://api.unsplash.com/users/${username}`,
            headers: {
    
                Authorization: 'Client-ID 8Y-4INl82H095BnwDlyJ30U9QoFnk_wYpKhG_Cs7FBg'
    
            }
    
        }).then((response) => {
    
            setUserObjectLoading(false);
            // setUserObjectError(false);
    
            setUserObject(response.data);
    
        }).catch(() => {
    
            setUserObjectLoading(false);
            setUserObjectError(true);
    
        });
    
    }, [username]);
    

    return [userObject , userObjectLoading ,userObjectError];
}

export default useProfileData;