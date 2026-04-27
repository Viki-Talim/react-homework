import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Todos } from './components/Todos.jsx'
import { Posts } from './components/Posts.jsx';
import { Comments } from './components/Comments.jsx'
import { CommentDetails } from './components/CommentDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostComments } from './components/PostComments.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route path={'/todos'} element={<Todos />} />
        <Route path={'/posts'} element={<Posts />} />
        <Route path={'/comments'} element={<Comments />} />
        <Route path={'/comment/:commentId'} element={<CommentDetails/>} />
        <Route path={'/post/:postId'} element={<PostComments/>} />
      </Route>
    </Routes>
  </Router>
)