import React, { useState, memo } from 'react';

import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import fake_data from '../../utils/constants/fakedata.json';
import useFeedData from '../../utils/customhooks/useFeedData';
import HeroBasic from '../../components/HeroBasic/HeroBasic';
import ModalBasic from '../../components/ModalBasic/ModalBasic';
import ModalPost from '../../comp-custom/ModalPost/ModalPost';
import MasonryGallery from '../../components/Galleries/MansoryGallery/MansoryGallery'
import CategoriesList from '../../comp-custom/CategoriesList/CategoriesList';


/*---------CONSIDER CHANGING FEED TO DISCOVER ----------*/

const Feed = () => {

    const [pageNumber, setPageNumber] = useState(1);
    function handlePageNumber() {

        setPageNumber(prevPageNumber => prevPageNumber + 1);
    }

    const [feedArray, feedDataLoading, errorGalleryData] = useFeedData(pageNumber, 10);

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


    return (

        <>
            <div className='_layout'>

                {/* <HorizontalSlider data={fake_data['fake_categories_data']} /> */}

                <CategoriesList categoriesArray={fake_data.fake_categories_data} />


                <div className="_container _layout " style={{ textAlign: 'center' }}>


                    <h1>Portrait</h1>


                </div>





                <main className="_container _fullwidth_on_mobile">

                    <div className = '_container _fullwidth_on_desktop'>
                                            <SectionHeader link='google' title='Popular' button={<ButtonPlain type='link'> View all  </ButtonPlain>} />

                    </div>


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