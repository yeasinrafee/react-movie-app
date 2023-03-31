import React from "react";

const SingleCard = (props) => {
  const { movieName, watchTime, description, poster, imdbRating } = props.movie;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 w-3/5 mx-auto">
          <img src={poster} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{movieName}</h2>
          <p>{description}</p>
          <div className="flex gap-28 mx-5">
            <p>Watch Time: {watchTime} min</p>
            <p>IMDB Ratings: {imdbRating}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => props.handleWatchTime(watchTime)}
              className="btn btn-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
