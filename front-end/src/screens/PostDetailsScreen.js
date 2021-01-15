import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { listPostDetails } from '../actions/postsActions';

import './PostDetailsScreen.css';
import Title from '../components/Title';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


const PostDetailsScreen = ({match}) => {

    const postId = match.params.id;
    const dispatch = useDispatch();

    const postsList = useSelector(state => state.postsList);

    const {post, error, loading} = postsList;

    useEffect(() => {
        dispatch(listPostDetails(postId));
    }, [dispatch, postId]);

    return (<>
        
        {error && <MessageBox>{error}</MessageBox>}
        
        {post && !loading && !error && (
            <div className="row center">
    
        <div className="post-grid center">
            <div className="post-title">
                <Title>{post.title}</Title>

                <p className="left category">{post.category}</p>
            </div>

            <div className="img-large">
                
                <p className="left small"><i className="far fa-clock"></i> Publicado {' ' + post.date }</p>
                
                <img src={post.image} alt={post.title} />
            </div>
            
        
        <div className="justify">
            <p>
                {post.content}
            </p>
        </div>
    </div>
    </div>
        )}
        {loading && <LoadingBox />}
        
    </>)
}

export default PostDetailsScreen
