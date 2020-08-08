import { useState, useEffect } from 'react';
import { getPosts } from '../../../services/posts';

export default function useFeedData(albumId) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts(albumId).then((response) => { //2 is the albumId

            setPosts(response);

        });

    }, [albumId]); //Album id is the dependancy which change in value determines whether or not useeffect should re-run

    // return [posts, setPosts]

    return posts;

}