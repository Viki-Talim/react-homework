import { FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from './../constants/CommentsConstants';
import axios from 'axios';

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (err) => { 
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: err
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments') 
            .then(result => dispatch(fetchCommentsSuccess(result.data)))
            .catch(error => dispatch(fetchCommentsFail(error.message)))
    }
}