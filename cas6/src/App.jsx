import React, { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { Navigation } from "./components/Navigation";

import { Route, Routes } from "react-router-dom";

export function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div id="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts" element={<Posts postsList={posts} />} />
      </Routes>
    </div>
  );
}
