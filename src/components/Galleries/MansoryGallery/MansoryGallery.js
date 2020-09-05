import React from 'react';
import { Masonry, Box, Image } from 'gestalt';
import Spinner from '../../Loading/Spinner/Spinner';

const MansoryGallery = ({ data, loadMore , loading , error }) => {
    return (


        <>
            <Masonry
                flexible
                comp={({ data }) => (
                    <Box>
                        <Image
                            alt="Test"
                            color={data.color}
                            naturalHeight={data.height}
                            naturalWidth={data.width}
                            src={data.src}
                        />
                        <p>{data.name}</p>
                    </Box>
                )}
                gutterWidth={10}
                columnWidth = {300}
                items={data}
                minCols={1}
                loadItems={loadMore}

                scrollContainer={() => window}
                // virtualize


            />

            {loading && <div style={{width:'100%', textAlign:'center'}}><Spinner/></div>}

            {error && <div>Error</div>}
        </>


    );
}

export default MansoryGallery;