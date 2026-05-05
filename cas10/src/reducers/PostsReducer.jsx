import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS,
} from "../constants/PostsConstants";

const initalState = {
  posts: [],
  error: undefined,
};

const PostsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case FETCH_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default PostsReducer;
