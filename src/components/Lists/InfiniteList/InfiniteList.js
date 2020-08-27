import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './CustomHooks/useBookSearch';

const InfiniteList = () => {

    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const { books , loading , hasMore } = useBookSearch({ query, pageNumber });

    const observer = useRef();
    const lastBookElement = useCallback(node =>{

        if(loading){return};
        if(observer.current){observer.current.disconnect()};

        observer.current = new IntersectionObserver(entries =>{

            if(entries[0].isIntersecting && hasMore){



                    setPageNumber(prev => prev +1 )

            }


        });

        if(node) observer.current.observe(node);

    } , [loading, hasMore]);


    function handleInputChange({ target: { value: query } }) {

        setQuery(query);
        setPageNumber(1);

    }


    console.log(books)


    return (<div>

        <input value={query} onChange={handleInputChange} />



        {/* {error && <div>Errors</div>} */}

        {books.map(({ title, key } , index) => {

            if( index+1 === books.length ){

                return (<div ref={lastBookElement} key={key}> {title} </div>)

            }

            return (<div  key={key}> {title} </div>)

        })
    }

    {loading&& <div>Loading..</div>}






    </div>);
}

export default InfiniteList;