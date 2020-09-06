import React from 'react';
import { Masonry, Image } from 'gestalt';
import Spinner from '../../Loading/Spinner/Spinner';
import { Link, useLocation } from 'react-router-dom';
import GalleryCard from '../../../comp-custom/GalleryCard/GalleryCard';

const MansoryGallery = ({ data, loadMore , loading , error }) => {


    let location = useLocation();


    function onControlClick(e, id, type) {

        e.stopPropagation();
        e.preventDefault();

        console.log(id)

    }


    return (

        <>
            <Masonry
                flexible
                comp={({ data }) => (
                    <GalleryCard location={location} data={data} onControlClick={onControlClick}/>
                )}
                gutterWidth={20}
                columnWidth = {300}
                items={data}
                minCols={1}
                loadItems={loadMore}

                scrollContainer={() => window}
                virtualize


            />

            {loading && <div style={{width:'100%', textAlign:'center'}}><Spinner/></div>}

            {error && <div>Error</div>}
        </>


    );
}

export default MansoryGallery;