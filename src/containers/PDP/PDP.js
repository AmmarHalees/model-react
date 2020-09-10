import React from 'react';

import { useRouteMatch } from 'react-router-dom';
import usePhotobyID from '../../utils/customhooks/usePhotobyID';
import { Image } from 'gestalt';


const PDP = () => {

    const { params } = useRouteMatch();

    const [imageObject, loading] = usePhotobyID(params.id);
    const { urls: { full } = {}, alt_description, id } = imageObject;


    console.log(imageObject)

    return (
        <>

            <h3>{alt_description}</h3>
{/* 
            <Image

                alt={imageObject.alt_description}
                color={imageObject.color}
                naturalHeight={imageObject.height}
                naturalWidth={imageObject.width}
                src={full} /> */}

            <img src={full} alt={alt_description} />


        </>
    );
}

export default PDP;