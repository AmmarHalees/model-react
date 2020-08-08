import { useState, useEffect } from 'react';
import { getPosts } from '../../../services/posts';

export default function useFeedData(albumId) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts(albumId).then((response) => { //2 is the albumId

            setPosts(response);

        });

    }, [albumId]);

    // return [posts, setPosts]

    return posts;

}