import Filters from "@/components/layout/Filters";
import { useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Filters />
      <div>
        {movies && movies.length > 0 ? (
          <div>teste</div>
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
