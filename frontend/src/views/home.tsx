import Filters from "@/components/layout/Filters";
import MovieCard from "@/components/layout/MovieCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const moviesMock = new Array(8).fill(null).map((_, i) => ({ id: i + 1 }));
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;
  const totalPages = Math.ceil(moviesMock.length / moviesPerPage);
  const paginatedMovies = moviesMock.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <>
      <Filters />
      <div>
        {moviesMock.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:max-w-[70%] m-auto">
            {paginatedMovies.map((movie) => (
              <MovieCard key={movie.id} />
            ))}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center mt-20">
            <h2 className="text-muted-foreground">
              Nenhum filme no catálogo ainda.
            </h2>
          </div>
        )}

        {totalPages >= 1 && (
          <div className="flex justify-center p-4 items-center">
            <Button
              className="flex items-center gap-2 hover:underline disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="text-background" />
              <span className="text-background">Anterior</span>
            </Button>

            <span className="text-sm flex items-center gap-1">
              <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
            </span>

            <Button
              className="flex items-center gap-2 hover:underline disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span className="text-background">Próximo</span>
              <ArrowRight className="text-background" />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
