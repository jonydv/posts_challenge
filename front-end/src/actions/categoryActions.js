import Axios from 'axios';
import {
    CATEGORYS_LIST_REQUEST, CATEGORYS_LIST_SUCCESS, CATEGORYS_LIST_FAIL
} from '../constants/categoryConstants';

const URL = 'http://localhost:5000';

export const listCategorys = () => async(dispatch) =>{

    try{
        dispatch({type: CATEGORYS_LIST_REQUEST});

        const {data} = await Axios.get(`${URL}/categorys`);

        dispatch({
            type: CATEGORYS_LIST_SUCCESS,
            payload: data
        });
    }catch(error){
        dispatch({
            type: CATEGORYS_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        });
    };
}