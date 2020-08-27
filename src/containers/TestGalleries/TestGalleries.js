import React, { useEffect, useState } from 'react';
import { getPhotos } from '../../services/photos';



const TestGalleries = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {


        getPhotos('flowers', 'image').then(itemsArray => setItems(itemsArray))


    }, []);


    return (

        <div></div>
    )
}

export default TestGalleries;
