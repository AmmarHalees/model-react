import { useState, useEffect } from 'react';
import Axios from 'axios';


const useApi = (pagenumber, perpage) => {

    const [loadingGalleryData, setLoading] = useState(false);

    const [errorGalleryData, setError] = useState(false);


    const [data, setData] = useState([]);

    useEffect(() => {


        setError(false);
        setLoading(true);

        Axios({

            method: 'GET',
            url: `https://api.unsplash.com/photos?page=${pagenumber}&per_page=${perpage}`,
            headers: {

                Authorization: 'Client-ID 8Y-4INl82H095BnwDlyJ30U9QoFnk_wYpKhG_Cs7FBg'

            }
        })

            .then(res => {

                setLoading(false);
                setError(false);

                setData(prevData => [...prevData , ...res.data.map(x=>({


                        ...x ,
                        src : x.urls.regular 


                }))] );

            })
            .catch(e => {

                
                setLoading(false);
                setError(true);

                console.log(e)

            })


    }, [pagenumber, perpage])

    return ([data, loadingGalleryData, errorGalleryData]);
}

export default useApi;