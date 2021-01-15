import Axios from 'axios';

import {
    POSTS_LIST_REQUEST,
    POSTS_LIST_SUCCESS,
    POSTS_LIST_FAIL,
    POSTS_DETAILS_REQUEST,
    POSTS_DETAILS_SUCCESS,
    POSTS_DETAILS_FAIL,
    POSTS_DELETE_REQUEST,
    POSTS_DELETE_SUCCESS,
    POSTS_DELETE_FAIL,
    POSTS_CREATE_REQUEST,
    POSTS_CREATE_SUCCESS,
    POSTS_CREATE_FAIL,
    POSTS_UPDATE_REQUEST,
    POSTS_UPDATE_SUCCESS,
    POSTS_UPDATE_FAIL
} from '../constants/postsConstants';

const URL = 'http://localhost:5000/posts';

export const listPosts = () => async(dispatch) => {
    try{
        dispatch({type: POSTS_LIST_REQUEST});
        
        const {data} = await Axios.get(URL);

        dispatch({
            type: POSTS_LIST_SUCCESS,
            payload: data
        });
    }catch(error){
        dispatch({
            type: POSTS_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        });
    }
}

export const listPostDetails = (postId) => async(dispatch) => {
    try{
        dispatch({type: POSTS_DETAILS_REQUEST});
        
        const {data} = await Axios.get(`${URL}/${postId}`);

        dispatch({
            type: POSTS_DETAILS_SUCCESS,
            payload: data
        });
    }catch(error){
        dispatch({
            type: POSTS_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        });
    }
}

export const deletePost = (postId) => async(dispatch) => {
    try{

        dispatch({
            type: POSTS_DELETE_REQUEST,
            payload: postId
        });
        

        await Axios.delete(`${URL}/${postId}`);

        dispatch({
            type: POSTS_DELETE_SUCCESS,
        })
    }catch(error) {
        dispatch({
            type: POSTS_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const updatePost = (post) => async(dispatch) => {
    try{

        dispatch({
            type: POSTS_UPDATE_REQUEST,
            payload: post.id
        });
        
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        await Axios.patch(`${URL}/${post.id}`, post, config);

        dispatch({
            type: POSTS_UPDATE_SUCCESS,
            payload: post
        })
    }catch(error) {
        dispatch({
            type: POSTS_UPDATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const createPost = (post) => async(dispatch) => {
    try{
        
        dispatch({
            type: POSTS_CREATE_REQUEST,
        });
        
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const {data} = await Axios.post(URL, post, config);

        dispatch({
            type: POSTS_CREATE_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: POSTS_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}