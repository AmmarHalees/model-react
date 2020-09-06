import React from 'react';

import { useRouteMatch } from 'react-router-dom';
import usePhotobyID from '../../utils/customhooks/usePhotobyID';


const PDP = () => {

    const { params } = useRouteMatch();

    const [imageObject, loading] = usePhotobyID(params.id);
    const { urls: { regular } = {}, alt_description, id } = imageObject;


    return (
        <>

            <h1>{alt_description}</h1>

            <img src={regular} alt={alt_description} />


        </>
    );
}

export default PDP;