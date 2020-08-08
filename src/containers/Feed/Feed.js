import React, { useState, useEffect, memo } from 'react';

import PostCard from '../../comp-custom/PostCard/PostCard';
import ResponsiveList from '../../components/Lists/ResponsiveList/ResponsiveList';
import SectionHeader from '../../components/Headers/SectionHeader/SectionHeader';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';
import HorizontalSlider from '../../comp-custom/HorizontalSlider/HorizontalSlider';
import fake_data from '../../utils/constants/fakedata.json';
import { getPosts } from '../../services/posts';


const Feed = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts(2).then((response) => { //2 is the albumId
            setPosts(response);

        })

    }, []);



    return (

        <div className='_layout'>

            <HorizontalSlider data={fake_data['fake_categories_data']} />

            <main className="_container _layout">

                <SectionHeader link='google' title='Popular' button={<ButtonPlain type='link'> View all  </ButtonPlain>} />

                <ResponsiveList>

                    {
                        posts.map(({title, url, id}) => {

                            return (<PostCard title={title} url={url}  key={id} onClick={()=>alert(id)}/>)

                        })
                    }

                </ResponsiveList>

                <SectionHeader link='awards' title='Awards' button={<ButtonIcon size='small' type='link' title="close" icon={<CloseIcon />} />} />

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

export default memo(Feed);