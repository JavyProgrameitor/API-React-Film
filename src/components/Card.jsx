import React from "react";

const Card = ({ movie }) => (
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded overflow-hidden ">
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster}  className=" w-full h-56 p-1" />
      ) : (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center h-48">
          No Image
        </div>
      )}
      <div className="p-4">
        <h2 className="text-center text-lg font-extrabold text-fuchsia-950">{movie.Title}</h2>
        <p className="text-center text-violet-100">{movie.Year}</p>
      </div>
    </div>
  );


export default Card;
