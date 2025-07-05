import FormInput from "../ui/formInput";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { movieFormSchema } from "@/utils/validationFormData";

type MovieFormErrors = Partial<{
  name: string;
  description: string;
  releaseYear: string;
  gender: string;
  director: string;
  duration: string;
  imageUrl: string;
  trailerUrl: string;
}>;

interface FormProps {
  labelButton: string;
}

const Form = ({ labelButton }: FormProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickButtonCancel = () => {
    if (pathname === "/create") {
      navigate("/");
    } else {
      window.history.back();
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    releaseYear: "",
    gender: "",
    director: "",
    duration: "",
    imageUrl: "",
    trailerUrl: "",
  });

  const [errors, setErrors] = useState<MovieFormErrors>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const result = movieFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });

      setErrors(fieldErrors);
      console.log(fieldErrors);
      return;
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <div>
        <FormInput
          label="Nome"
          name="name"
          type="text"
          placeholder="Nome do filme"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-semibold">
          Descrição
        </label>
        <Textarea
          placeholder="Descrição do filme"
          name="description"
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">{errors.description}</span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full flex-wrap">
        <div>
          <FormInput
            label="Diretor"
            name="director"
            type="text"
            placeholder="Nome do diretor do filme"
            value={formData.director}
            onChange={(e) => {
              setFormData({ ...formData, director: e.target.value });
            }}
          />
          {errors.director && (
            <span className="text-red-500 text-sm">{errors.director}</span>
          )}
        </div>
        <div>
          <FormInput
            label="Duração"
            name="duration"
            type="string"
            placeholder="Duração do filme em minutos"
            value={formData.duration}
            onChange={(e) => {
              setFormData({ ...formData, duration: e.target.value });
            }}
          />
          {errors.duration && (
            <span className="text-red-500 text-sm">{errors.duration}</span>
          )}
        </div>
        <div>
          <FormInput
            label="Ano de lançamento"
            name="releaseYear"
            type="string"
            placeholder="2025"
            value={formData.releaseYear}
            onChange={(e) => {
              setFormData({ ...formData, releaseYear: e.target.value });
            }}
          />
          {errors.releaseYear && (
            <span className="text-red-500 text-sm">{errors.releaseYear}</span>
          )}
        </div>
      </div>
      <div>
        <FormInput
          label="Genero"
          name="genre"
          type="text"
          placeholder="Genero do filme"
          value={formData.gender}
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}
        />
        {errors.gender && (
          <span className="text-red-500 text-sm">{errors.gender}</span>
        )}
      </div>
      <div>
        <FormInput
          label="Poster"
          name="image"
          type="text"
          placeholder="https://exemplo.com/poster.jpg"
          value={formData.imageUrl}
          onChange={(e) => {
            setFormData({ ...formData, imageUrl: e.target.value });
          }}
        />
        {errors.imageUrl && (
          <span className="text-red-500 text-sm">{errors.imageUrl}</span>
        )}
      </div>
      <div>
        <FormInput
          label="Trailer"
          name="trailer"
          type="text"
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          value={formData.trailerUrl}
          onChange={(e) => {
            setFormData({ ...formData, trailerUrl: e.target.value });
          }}
        />
        {errors.trailerUrl && (
          <span className="text-red-500 text-sm">{errors.trailerUrl}</span>
        )}
      </div>
      <div className="w-full flex gap-4 mt-4">
        <Button
          variant="default"
          className="flex-1"
          onClick={(e) => {
            e.preventDefault();
            handleClickButtonCancel();
          }}
        >
          Cancelar
        </Button>
        <a href="/" className="flex-1">
          <Button variant="blue" className="w-full" onClick={handleSubmit}>
            {labelButton}
          </Button>
        </a>
      </div>
    </form>
  );
};

export default Form;
