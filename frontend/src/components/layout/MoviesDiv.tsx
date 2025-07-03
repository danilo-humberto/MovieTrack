import MovieCard from "./MovieCard";

const MoviesDiv = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:max-w-[70%] m-auto">
      <MovieCard />
    </div>
  );
};

export default MoviesDiv;
