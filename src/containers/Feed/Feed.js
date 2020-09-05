import React, { useState, memo } from 'react';

import PostCard from '../../comp-custom/PostCard/PostCard';

import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import HorizontalSlider from '../../comp-custom/HorizontalSlider/HorizontalSlider';
import fake_data from '../../utils/constants/fakedata.json';
import useFeedData from '../../utils/customhooks/useFeedData';
import HeroBasic from '../../components/HeroBasic/HeroBasic';
import ModalBasic from '../../components/ModalBasic/ModalBasic';
import ModalPost from '../../comp-custom/ModalPost/ModalPost';
import MasonryGallery from '../../components/Galleries/MansoryGallery/MansoryGallery'


const Feed = () => {

    const [pageNumber, setPageNumber] = useState(1);
    function handlePageNumber() {

        setPageNumber(prevPageNumber => prevPageNumber + 1);
    }

    const [feedArray, feedDataLoading, errorGalleryData] = useFeedData(pageNumber, 15);

    const [open, setOpen] = useState(false);


    function onPostClick(e, id) {

        setOpen(true);

    }



    function onRequestClose() {

        setOpen(false);

    }

    function onControlClick(e, id, type) {

        e.stopPropagation();

    }

    console.log(window.innerHeight)

    return (

        <>
            <div className='_layout'>

                <HorizontalSlider data={fake_data['fake_categories_data']} />

                <div className="_container _layout ">

                    <HeroBasic bordered title='Live your life' description='loremdddddddddddddddddddddddd' />
                    <SectionHeader link='google' title='Popular' button={<ButtonPlain type='link'> View all  </ButtonPlain>} />


                </div>


                <main className="_container">


                    {/* 
                    <ResponsiveList>

                        {
                            feedArray.map(({ description, src, id }) => {

                                return (<PostCard onPostClick={onPostClick} onControlClick={onControlClick} title={description} url={src} key={id} id={id} />)

                            })
                        }

                    </ResponsiveList>
 */}


                    <MasonryGallery data={feedArray} loadMore={handlePageNumber} error={errorGalleryData} loading={feedDataLoading} />


                </main>

            </div>

            <ModalBasic onRequestClose={onRequestClose} isOpen={open}>

                <ModalPost />

            </ModalBasic>

        </>
    );
}

export default memo(Feed);