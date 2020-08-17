import React, { useState, useEffect, memo } from 'react';

import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';
import HorizontalSlider from '../../comp-custom/HorizontalSlider/HorizontalSlider';
import fake_data from '../../utils/constants/fakedata.json';
import useFeedData from './FeedCustomHooks/useFeedData';
import HeroBasic from '../../components/HeroBasic/HeroBasic';


const Feed = () => {

    const [album_id, setAlbumId] = useState(2);

    const posts = useFeedData(album_id);


    function onPostClick(e) {


        console.log('post click')
    }

    function onControlClick(e,type) {

        e.stopPropagation();


        console.log(type)
    }

    return (

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

                            return (<PostCard  onPostClick={onPostClick} onControlClick={onControlClick} title={title} url={url} key={id} onClick={() => alert(id)} />)

                        })
                    }

                </ResponsiveList>

                <SectionHeader link='awards' title='Awards' button={<ButtonIcon size='small' type='link' title="close" icon={<CloseIcon />} />} />

                <ResponsiveList>

                    <PostCard onPostClick={onPostClick} onControlClick={onControlClick} />
                    <PostCard onPostClick={onPostClick} onControlClick={onControlClick} />
                    <PostCard onPostClick={onPostClick} onControlClick={onControlClick} />
                    <PostCard onPostClick={onPostClick} onControlClick={onControlClick}  />
                    <PostCard onPostClick={onPostClick} onControlClick={onControlClick} />

                </ResponsiveList>

            </main>

        </div>

    );
}

export default memo(Feed);