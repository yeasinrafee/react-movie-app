import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setMovies(data);
      //   console.log(data);
    };
    loadData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {movies.map((movie, index) => (
        <SingleCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
