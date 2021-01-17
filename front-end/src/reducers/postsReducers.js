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

const initialState = {posts: [], loading: false, error: null};
export const postsReducers = (state = initialState, action) => {
    switch (action.type){
        case POSTS_LIST_REQUEST:
            return {...state, loading: true};
        case POSTS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error:null
            };
        case POSTS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

         case POSTS_DETAILS_REQUEST:
                return {
                    ...state,
                    loading: true
                };
          case POSTS_DETAILS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    post: action.payload
                };
          case POSTS_DETAILS_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
            
            case POSTS_DELETE_REQUEST:
                    return {
                            ...state,
                            postId: action.payload
                    };

            case POSTS_DELETE_SUCCESS:
                    return {
                        ...state,
                        posts: state.posts.filter(p => p.id !== state.postId),
                       
                    };
            case POSTS_DELETE_FAIL:
                    return {
                        ...state,
                        error: action.payload
                    };
            case POSTS_UPDATE_REQUEST:
                return {
                    ...state,
                    postId: action.payload
                };
            case POSTS_UPDATE_SUCCESS:
                return {
                    ...state,
                    posts: state.posts.map(p => 
                            (p.id === state.postId) ? action.payload
                            : p)
                };
            case POSTS_UPDATE_FAIL:
                return {
                    ...state,
                    error: action.payload
                }
            case POSTS_CREATE_REQUEST:
                return { ...state, loading: true};
            case POSTS_CREATE_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    posts: [...state.posts, action.payload]
                };
            case POSTS_CREATE_FAIL:
                    return {
                        ...state,
                        error: action.payload
                    }
          default:
                return state;
    }
}
