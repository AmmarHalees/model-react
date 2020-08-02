import React, { useState } from 'react';


import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import FeedSlider from '../../comp-custom/FeedSlider/FeedSlider';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';


const Feed = () => {


    return (

        <div className='_layout'>

            <FeedSlider />

            <main className="_container _layout">

                <SectionHeader link='google' title='Popular' button={<ButtonPlain type='link'> View all  </ButtonPlain>} />

                <ResponsiveList>

                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />


                </ResponsiveList>

                <SectionHeader link='awards' title='Awards' button={<ButtonIcon size='small' type='link' icon={<CloseIcon/>}/>} />

                <ResponsiveList>

                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />


                </ResponsiveList>


            </main>




        </div>



    );
}

export default Feed;