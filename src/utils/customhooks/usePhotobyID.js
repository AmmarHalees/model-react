import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const usePhotobyID = (photo_id) => {


    const [photo_object, setPhotoObject] = useState({});
    const [loadingImageByID, setLoading] = useState(false);
    const [errorImageByID, setError] = useState(false);


    useEffect(() => {


        if (!photo_id) {

            return;
        }

        setError(false);
        setLoading(true);


        Axios({

            method: 'GET',
            url: `https://api.unsplash.com/photos/${photo_id}`,
            headers: {

                Authorization: 'Client-ID 8Y-4INl82H095BnwDlyJ30U9QoFnk_wYpKhG_Cs7FBg'

            }

        })
            .then(response => {

                setLoading(false);
                setError(false);

                setPhotoObject(response.data);
            }).catch(e => {


                setLoading(false);
                setError(true);

                console.log(e);

            });


    }, [photo_id]);

    return ([photo_object, loadingImageByID, errorImageByID]);
}

export default usePhotobyID;