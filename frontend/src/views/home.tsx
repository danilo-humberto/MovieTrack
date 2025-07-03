import Filters from "@/components/layout/Filters";
import MoviesDiv from "@/components/layout/MoviesDiv";
import { useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([1]);
  return (
    <>
      <Filters />
      <div>
        {movies && movies.length > 0 ? (
          <MoviesDiv />
        ) : (
          <div className="w-full flex items-center justify-center mt-20">
            <h2 className="text-muted-foreground">
              Nenhum filme no catálogo ainda.
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
