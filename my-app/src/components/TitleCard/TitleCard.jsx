// TitleCard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TitleCard.css";

const TitleCard = ({ title, search }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=f7593330`
      );
      const data = await res.json();
      if (data.Search) setMovies(data.Search);
    };
    fetchMovies();
  }, [search]);

  return (
    <div className="title-cards">
      <h2>{title}</h2>

      <div className="card-list">
        {movies.map((movie) => (
          <div
            className="card"
            key={movie.imdbID}
            onClick={() =>
              navigate(`/player/${encodeURIComponent(movie.Title)}`)
            }
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
              alt={movie.Title}
            />
            <div className="card-overlay">
              <p>{movie.Title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
