import React from "react";

export const Movies = ({ filmovi }) => {
  return (
    <div id="movies">
      {filmovi.map((film, i) => {
        return (
          <div key={i}>
            <img src={film.imgUrl} alt={film.name} width="200" />

            <h3>{film.name}</h3>
            <p>Date: {film.date}</p>
            <p>Genre: {film.genre}</p>
            <p>Plot: {film.plot}</p>

            <p>
              <a href={film.imdbLink} target="_blank" rel="noreferrer">
                View on IMDb
              </a>
            </p>

            <hr />
          </div>
        );
      })}
    </div>
  );
};
