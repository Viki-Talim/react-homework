import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../actions/PostsActions";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostsReducer.posts);
  const greska = useSelector((state) => state.PostsReducer.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <div id="posts">
      {posts.map(post=>{
        return (
          <div key={post.id}>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <hr />
          </div>
        );
      })}
      {greska && <h1>{greska}</h1>}
    </div>
  );
};
