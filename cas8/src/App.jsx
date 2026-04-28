import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { Albums } from "./components/Albums";
import { Nav } from "./components/Nav";
import axios from "axios";
import "./css/App.css";
import { GalleryContext } from "./utils/GalleryContext";
import { AlbumsContext } from "./utils/AlbumsContext";

export function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios("https://picsum.photos/v2/list")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err));
    axios("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletePhoto = (url) => {
    const filteredPhotos = photos.filter((photo) => photo.download_url !== url);
    setPhotos(filteredPhotos);
    setSelectedImage("");
  };

  return (
    <div id="app">
      <Nav />
      <AlbumsContext.Provider value={albums}>
        <GalleryContext.Provider
          value={{ selectedImage, setSelectedImage, deletePhoto }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={<Gallery listOfPhotos={photos} />}
            />
            <Route path="/albums" element={<Albums />} />
          </Routes>
        </GalleryContext.Provider>
      </AlbumsContext.Provider>
    </div>
  );
}
