import React, { useState, memo } from 'react';

import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import HorizontalSlider from '../../comp-custom/HorizontalSlider/HorizontalSlider';
import fake_data from '../../utils/constants/fakedata.json';
import useFeedData from './FeedCustomHooks/useFeedData';
import HeroBasic from '../../components/HeroBasic/HeroBasic';
import ModalBasic from '../../components/ModalBasic/ModalBasic';
import ModalPost from '../../comp-custom/ModalPost/ModalPost';


const Feed = () => {

    const [album_id, setAlbumId] = useState(2);
    const posts = useFeedData(album_id);


    const [open , setOpen] = useState(false);


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

                <HorizontalSlider data={fake_data['fake_categories_data']} />

                <main className="_container _layout">


                    <button onClick={() => setAlbumId(2)}>2</button>
                    <button onClick={() => setAlbumId(3)}>3</button>
                    <button onClick={() => setAlbumId(4)}>4</button>
                    <button onClick={() => setAlbumId(5)}>5</button>

                    <HeroBasic bordered title='Live your life' description='loremdddddddddddddddddddddddd' />


                    <SectionHeader link='google' title='Popular' button={<ButtonPlain type='link'> View all  </ButtonPlain>} />

                    <ResponsiveList>

                        {
                            posts.map(({ title, url, id }) => {

                                return (<PostCard onPostClick={onPostClick} onControlClick={onControlClick} title={title} url={url} key={id} id={id} />)

                            })
                        }

                    </ResponsiveList>



                </main>

            </div>

                    <ModalBasic onRequestClose={onRequestClose} isOpen={open}>

                        <ModalPost/>

                    </ModalBasic>

        </>
    );
}

export default memo(Feed);