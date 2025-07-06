import Filters from "@/components/layout/Filters";
import MovieCard from "@/components/layout/MovieCard";
import { Button } from "@/components/ui/button";
import { useMovies } from "@/hooks/useMovies";
import type { Movie } from "@/types/Movie";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const { data, isLoading, isError } = useMovies();
  const [selectedGender, setSelectedGender] = useState("");
  const [searchText, setSearchText] = useState("");

  const movies = data ?? [];

  const filteredMovies = movies.filter((movie: Movie) => {
    const matchsGender = selectedGender
      ? movie.gender === selectedGender
      : true;
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchsGender && matchesSearch;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;
  const totalPages = data
    ? Math.ceil(filteredMovies.length / moviesPerPage)
    : 0;
  const paginatedMovies = filteredMovies
    ? filteredMovies.slice(
        (currentPage - 1) * moviesPerPage,
        currentPage * moviesPerPage
      )
    : [];

  return (
    <>
      <Filters
        movies={movies}
        onGenderChange={setSelectedGender}
        onSearchChange={setSearchText}
      />
      <div>
        {isLoading ? (
          <div className="w-full flex items-center justify-center mt-20">
            <LoaderCircle size={30} className="animate-spin" />
          </div>
        ) : isError ? (
          <div className="w-full flex items-center justify-center mt-20">
            <h2 className="text-muted-foreground">Erro ao carregar filmes.</h2>
          </div>
        ) : paginatedMovies.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:max-w-[70%] m-auto">
            {paginatedMovies.map((movie: Movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                releaseYear={movie.releaseYear}
                gender={movie.gender}
                duration={movie.duration}
                imageUrl={movie.imageUrl}
              />
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
