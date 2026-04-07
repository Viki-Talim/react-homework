import React from "react";
import { Movies } from "./components/Movies";

export function App() {
  let movies = [
    {
      name: "Schindler's List",
      date: "December 15, 1993",
      genre: "War/Drama",
      plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      imdbLink: "https://www.imdb.com/title/tt0108052/",
      imgUrl:
        "https://m.media-amazon.com/images/I/81L1TD7+aHL._AC_UF894,1000_QL80_.jpg",
    },
    {
      name: "Forrest Gump",
      date: "July 6, 1994",
      genre: "Comedy/Romance",
      plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      imdbLink: "https://www.imdb.com/title/tt0109830/",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Oppenheimer",
      date: "July 21, 2023",
      genre: "Thriller ",
      plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      imdbLink: "https://www.imdb.com/title/tt15398776/?ref_=chttp_t_131",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg",
    },
    {
      name: "A Beautiful Mind",
      date: "December 21, 2001",
      genre: " Thriller/Romance",
      plot: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
      imdbLink:"https://www.imdb.com/title/tt0268978/",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43qUy_HHcTDlKBzXDYCa3naWyjTBLQeVxcw&s",
    },
    {
      name: "Jurassic Park",
      date: "June 11, 1993",
      genre: "Adventure/Sci-fi ",
      plot: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      imdbLink: "https://www.imdb.com/title/tt0107290/?ref_=chttp_t_137",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return (
    <div id="app">
      <h2>Top IMDb Movies:</h2>
      <hr/>
      <Movies filmovi={movies} />
    </div>
  );
}
