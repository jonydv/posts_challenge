import{
    CATEGORYS_LIST_REQUEST,
    CATEGORYS_LIST_SUCCESS,
    CATEGORYS_LIST_FAIL,
}
from '../constants/categoryConstants';

const initialState = {categorys: [], errorCategorys: null, loadingCategorys: false}

export const categoryReducers = (state=initialState, action) => {

    switch(action.type){
        case CATEGORYS_LIST_REQUEST:
            return {...state, loading: true};
        case CATEGORYS_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                categorys: action.payload
            };
        case CATEGORYS_LIST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
} 