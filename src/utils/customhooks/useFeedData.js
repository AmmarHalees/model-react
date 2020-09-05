import { useState, useEffect } from 'react';
import Axios from 'axios';


const useApi = (pageNumber, perPage) => {

    const [feedDataLoading, setLoading] = useState(false);

    const [errorGalleryData, setError] = useState(false);

    const [feedArray, setData] = useState([]);

    useEffect(() => {


        setError(false);
        setLoading(true);

        Axios({

            method: 'GET',
            url: `https://api.unsplash.com/photos?page=${pageNumber}&per_page=${perPage}`,
            headers: {

                Authorization: 'Client-ID 8Y-4INl82H095BnwDlyJ30U9QoFnk_wYpKhG_Cs7FBg'

            }
        })

            .then(res => {

                setLoading(false);
                setError(false);

                setData(prevData => [...prevData , ...res.data.map(x=>({


                        ...x ,
                        src : x.urls.small 


                }))] );

            })
            .catch(e => {

                
                setLoading(false);
                setError(true);

                console.log(e)

            })


    }, [pageNumber, perPage])

    return ([feedArray, feedDataLoading, errorGalleryData]);
}

export default useApi;