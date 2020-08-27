import { useState, useEffect } from 'react';
import Axios from 'axios';


const useBookSearch = ({ query: q, pageNumber: page }) => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(()=>{
        setBooks([])
    },[q])



    useEffect(() => {

        setLoading(true);
        setError(false);
        let cancel;

        Axios({

            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q, page },
            cancelToken: new Axios.CancelToken((c) => cancel = c)

        })
            .then(res => {

                setLoading(false);
                setBooks(

                    (prevBooks)=> {

                        return [...prevBooks , ...res.data.docs.map(({title, key}) => ({title, key}))]

                    } 

                );

                setHasMore(res.data.docs.length > 0);

            })
            .catch(e => {

                if(!Axios.isCancel(e)){

                    setLoading(true);

                   console.log(e) 

                }else{

                    return; 

                }

            });


            return ()=>{

                cancel();

            }



    }, [q, page]);

    return { books , loading , hasMore};
}

export default useBookSearch;