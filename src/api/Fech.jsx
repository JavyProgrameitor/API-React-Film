import Card from "../components/Card";
import { useEffect, useState, useRef } from "react";

const API_KEY = '8b40b30d'; // API key
const Spinner = () => {
  return <div className="spinner"></div>;
};

const MoviesList = ({ searchParams }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastSearch = useRef("");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchParams.param.trim()) return;

      //Change the searchParams object to a string
      const currentSearch = JSON.stringify(searchParams);
      if (lastSearch.current === currentSearch) return;
      lastSearch.current = currentSearch;

      let baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParams.param}`;
      if (searchParams.year.trim() !== "") {
        baseUrl += `&y=${searchParams.year}`;
      }

      setLoading(true);
      try {
        const typeValue = searchParams.type.trim().toLowerCase();

        if (typeValue === "all") {

          // Theee requests movie, series y game
          const types = ["movie", "series", "game"];
          const requests = types.map(async t => {
            const url = `${baseUrl}&type=${t}`;
            const res = await fetch(url);
            return await res.json();
          });
          const results = await Promise.all(requests);

          // Combine the results 
          let combinedResults = [];
          results.forEach(data => {
            if (data.Response === "True") {
              combinedResults = combinedResults.concat(data.Search);
            }
          });

          if (combinedResults.length > 0) {
            setMovies(combinedResults);
            setError(null);
          } else {
            // If there are no results
            const errorMsg = results.find(data => data.Error)?.Error || "No results";
            setMovies([]);
            setError(errorMsg);
          }
        } else {
          // One request
          let url = baseUrl;
          if (typeValue) {
            url += `&type=${typeValue}`;
          }
          const response = await fetch(url);
          const data = await response.json();
          if (data.Response === "True") {
            setMovies(data.Search);
            setError(null);
          } else {
            setMovies([]);
            setError(data.Error);
          }
        }
      } catch {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);
  return (
    <div>
    {loading && <Spinner />} 
      {error && <p className="text-red-600 font-bold">Not found</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
