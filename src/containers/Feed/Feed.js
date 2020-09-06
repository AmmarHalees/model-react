import React, { useState, memo } from 'react';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import fake_data from '../../utils/constants/fakedata.json';
import useFeedData from '../../utils/customhooks/useFeedData';
import MasonryGallery from '../../components/Galleries/MansoryGallery/MansoryGallery'
import CategoriesList from '../../comp-custom/CategoriesList/CategoriesList';
import SearchResOrSelectedHero from '../../comp-custom/SearchResOrSelectedHero/SearchResOrSelectedHero';

/*---------CONSIDER CHANGING FEED TO DISCOVER ----------*/
const Feed = () => {

    const [pageNumber, setPageNumber] = useState(1);
    function handlePageNumber() {

        setPageNumber(prevPageNumber => prevPageNumber + 1);
    }

    const [feedArray, feedDataLoading, errorGalleryData] = useFeedData(pageNumber, 10);


    return (

        <>
            <div className='_layout'>

                <CategoriesList categoriesArray={fake_data.fake_categories_data} />

                <SearchResOrSelectedHero title='Portrait' />

                <main className="_container _fullwidth_on_mobile">

                    <div className='_container _fullwidth_on_desktop'>
                        <SectionHeader link='google' title='Popular' button={<ButtonPlain type='link'> View all  </ButtonPlain>} />

                    </div>

                    <MasonryGallery data={feedArray} loadMore={handlePageNumber} error={errorGalleryData} loading={feedDataLoading} />

                </main>

            </div>



        </>

    );
}
export default memo(Feed);