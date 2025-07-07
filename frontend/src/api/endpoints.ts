import type { Movie } from "@/types/Movie";
import api from "./axios";

export const getMovies = async () => {
  const { data } = await api.get("/movies");
  return data;
};

export const getMovieById = async (id: string) => {
  const { data } = await api.get(`/movies/${id}`);
  return data;
};

export const createMovie = async (movie: Movie) => {
  const { data } = await api.post("/movies", movie);
  return data;
};

export const updateMovie = async (id: string, movie: any) => {
  const { data } = await api.patch(`/movies/${id}`, movie);
  return data;
};

export const deleteMovie = async (id: string) => {
  const { data } = await api.delete(`/movies/${id}`);
  return data;
};
