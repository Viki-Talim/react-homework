import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS,
} from "../constants/PostsConstants";
import axios from "axios";

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFail = (err) => {
  return {
    type: FETCH_POSTS_FAIL,
    payload: err,
  };
};

export const fetchPostsRequest = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => dispatch(fetchPostsSuccess(result.data)))
      .catch((error) => dispatch(fetchPostsFail(error.message)));
  };
};
