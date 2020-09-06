import React from 'react';
import { Masonry, Image } from 'gestalt';
import Spinner from '../../Loading/Spinner/Spinner';
import { Link, useLocation } from 'react-router-dom';

const MansoryGallery = ({ data, loadMore , loading , error }) => {


    let location = useLocation();

    return (


        <>
            <Masonry
                flexible
                comp={({ data }) => (
                    <Link
                    push
                      key={data.id}
                      to={{
                          pathname: `/photo/${data.id}`,
                          state: { background: location }
                      }}
                    >                        <Image
                            alt={data.alt_description}
                            color={data.color}
                            naturalHeight={data.height}
                            naturalWidth={data.width}
                            src={data.urls.small}

                            // srcSet = {`${data.urls.small} 400w,${data.urls.regular} 800w, ${data.urls.full} 1000w`}
                            loading='lazy'
                        />
                        <p>{data.name}</p>
                    </Link>
                )}
                gutterWidth={5}
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