import { useState, useEffect } from 'react';
import Axios from 'axios';



function usePhotoData(username) {

    const [userPhotos, setuserPhotos] = useState({});

    const [userPhotosLoading, setuserPhotosLoading] = useState(true);

    const [userPhotosError, setuserPhotosError] = useState(false);


    useEffect(() => {

        setuserPhotosLoading(true);
        setuserPhotosError(false);

        Axios({

            method: 'GET',
            url: `https://api.unsplash.com/users/${username}/photos`,
            headers: {

                Authorization: 'Client-ID 8Y-4INl82H095BnwDlyJ30U9QoFnk_wYpKhG_Cs7FBg'

            }

        }).then((response) => {


            setuserPhotosLoading(false);
            setuserPhotosError(false);


            setuserPhotos(response)

            // setuserPhotos(prevData => [...prevData, ...response.map(x => ({


            //     ...x,
            //     src: x.urls.small


            // }))]);


        }).catch(() => {

            setuserPhotosLoading(false);
            setuserPhotosError(true);

        });

    }, [username]);


    return [userPhotos, userPhotosLoading, userPhotosError];
}

export default usePhotoData;