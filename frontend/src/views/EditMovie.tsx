import Form from "@/components/layout/Form";
import { useEditMovie, useMovieById } from "@/hooks/useMovies";
import { movieFormSchema } from "@/utils/validationFormData";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const EditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: movie, isLoading, isError } = useMovieById(id || "");
  const { mutate, isPending } = useEditMovie();

  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    releaseYear: "",
    gender: "",
    director: "",
    duration: "",
    imageUrl: "",
    trailerUrl: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (movie) {
      setMovieData({
        title: movie.title,
        description: movie.description,
        releaseYear: movie.releaseYear.toString(),
        gender: movie.gender,
        director: movie.director,
        duration: movie.duration.toString(),
        imageUrl: movie.imageUrl,
        trailerUrl: movie.trailerUrl || "",
      });
    }
  }, [movie]);

  const handleChange = (field: string, value: string) => {
    setMovieData({ ...movieData, [field]: value });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = movieFormSchema.safeParse(movieData);
    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const movieToUpdate = {
      id: id || "",
      movie: {
        ...movieData,
        duration: Number(movieData.duration),
        releaseYear: Number(movieData.releaseYear),
        trailerUrl: movieData.trailerUrl || "",
      },
    };

    mutate(movieToUpdate, {
      onSuccess: () => {
        toast.success("Filme editado com sucesso");
        navigate("/");
      },
      onError: () => {
        toast.error("Erro ao editar filme");
      },
    });
  };

  return (
    <>
      {isError ? (
        <div className="p-4 w-full md:max-w-[40%] m-auto text-center">
          <h2 className="font-semibold text-2xl mb-4 text-red-500">Erro</h2>
          <p className="text-sm text-muted-foreground mb-4">
            O filme não foi encontrado ou o ID é inválido.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Voltar para o início
          </button>
        </div>
      ) : (
        <div className="p-4 w-full md:max-w-[40%] m-auto">
          <h2 className="font-semibold text-3xl mb-2">Editar Filme</h2>
          <p className="text-sm text-muted-foreground max-w-[300px] md:max-w-full">
            Preencha os campos abaixo para editar o filme do catálogo.
          </p>
          <div className="bg-[#252A2F] p-4 rounded-sm mt-4 flex flex-col gap-4">
            {isLoading ? (
              <div className="flex justify-center items-center mt-20">
                <LoaderCircle className="animate-spin" />
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-xl">Dados do Filme</h3>
                <Form
                  labelButton="Editar Filme"
                  formData={movieData}
                  errors={errors}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                  isPending={isPending}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EditMovie;
