import Form from "@/components/layout/Form";
import { useCreateMovie } from "@/hooks/useMovies";
import { movieFormSchema } from "@/utils/validationFormData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateMovie = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateMovie();

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

    const movie = {
      ...movieData,
      duration: Number(movieData.duration),
      releaseYear: Number(movieData.releaseYear),
      trailerUrl: movieData.trailerUrl || "",
    };

    mutate(movie, {
      onSuccess: () => {
        toast.success("Filme adicionado com sucesso");
        navigate("/");
      },
      onError: (error: any) => {
        const message =
          error?.response?.data?.message || "Erro ao adicionar filme";

        if (message.includes("já existe")) {
          toast.warning(message);
        } else {
          toast.error(message);
        }
      },
    });
  };

  return (
    <div className="p-4 w-full md:max-w-[40%] m-auto">
      <h2 className="font-semibold text-3xl mb-2">Adicionar Filme</h2>
      <p className="text-sm text-muted-foreground max-w-[300px] md:max-w-full">
        Preencha os campos abaixo para adicionar um novo filme ao catálogo.
      </p>
      <div className="bg-[#252A2F] p-4 rounded-sm mt-4 flex flex-col gap-4">
        <h3 className="font-semibold text-xl">Dados do Filme</h3>
        <Form
          formData={movieData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isPending={isPending}
          labelButton="Adicionar Filme"
        />
      </div>
    </div>
  );
};

export default CreateMovie;
