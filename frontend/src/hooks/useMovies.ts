import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMovies,
  updateMovie,
} from "@/api/endpoints";
import type { Movie } from "@/types/Movie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(),
  });

export const useMovieById = (id: string) =>
  useQuery({
    queryKey: ["movies", id],
    queryFn: async () => {
      try {
        const { data } = await getMovieById(id);
        return data;
      } catch (error: any) {
        if (axios.isAxiosError(error) && error.response?.status === 404)
          throw new Error("Filme nao encontrado.");
        throw new Error("Erro ao buscar filme.");
      }
    },
    enabled: !!id,
  });

export const useCreateMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
};

export const useEditMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, movie }: { id: string; movie: Movie }) =>
      updateMovie(id, movie),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      queryClient.invalidateQueries({ queryKey: ["movies", variables.id] });
    },
  });
};

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMovie,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      queryClient.invalidateQueries({ queryKey: ["movies", id] });
    },
  });
};
