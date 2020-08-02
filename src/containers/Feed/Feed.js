import React, { useState } from 'react';


import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';

const Feed = () => {

    return (

        <div className='_layout'>

            <section style={{ minWidth: "100%", background: "green" }}>Slider</section>


            <main className="_container _layout">



                <SectionHeader />

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