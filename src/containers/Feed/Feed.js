import React, { useState } from 'react';


import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';

const Feed = () => {

    return (

        <div>



            <main className="_layout">

                <section style={{ minWidth: "100%", background: "green" }}>Slider</section>

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