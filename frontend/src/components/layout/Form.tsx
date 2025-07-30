import FormInput from "../ui/formInput";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import React from "react";
import { LoaderCircle } from "lucide-react";

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
  formData: {
    title: string;
    description: string;
    releaseYear: string;
    gender: string;
    director: string;
    duration: string;
    imageUrl: string;
    trailerUrl: string;
  };
  errors: MovieFormErrors;
  onChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isPending?: boolean;
}

const Form = ({
  labelButton,
  formData,
  errors,
  onChange,
  onSubmit,
  onCancel,
  isPending = false,
}: FormProps) => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <FormInput
          label="Nome"
          name="name"
          type="text"
          placeholder="Nome do filme"
          value={formData.title}
          onChange={(e) => {
            onChange("title", e.target.value);
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
            onChange("description", e.target.value);
          }}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">{errors.description}</span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full flex-wrap">
        <div className="flex-1">
          <FormInput
            label="Diretor"
            name="director"
            type="text"
            placeholder="Nome do diretor do filme"
            value={formData.director}
            onChange={(e) => {
              onChange("director", e.target.value);
            }}
          />
          {errors.director && (
            <span className="text-red-500 text-sm">{errors.director}</span>
          )}
        </div>
        <div className="flex-1">
          <FormInput
            label="Duração"
            name="duration"
            type="string"
            placeholder="Duração do filme em minutos"
            value={formData.duration}
            onChange={(e) => {
              onChange("duration", e.target.value);
            }}
          />
          {errors.duration && (
            <span className="text-red-500 text-sm">{errors.duration}</span>
          )}
        </div>
        <div className="flex-1">
          <FormInput
            label="Ano de lançamento"
            name="releaseYear"
            type="string"
            placeholder="2025"
            value={formData.releaseYear}
            onChange={(e) => {
              onChange("releaseYear", e.target.value);
            }}
          />
          {errors.releaseYear && (
            <span className="text-red-500 text-sm">{errors.releaseYear}</span>
          )}
        </div>
      </div>
      <div>
        <FormInput
          label="Gênero"
          name="gender"
          type="text"
          placeholder="Gênero do filme"
          value={formData.gender}
          onChange={(e) => {
            onChange("gender", e.target.value);
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
            onChange("imageUrl", e.target.value);
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
            onChange("trailerUrl", e.target.value);
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
            onCancel();
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="blue"
          className="w-full flex-1"
          onClick={onSubmit}
          disabled={isPending}
        >
          {isPending ? <LoaderCircle className="animate-spin" /> : labelButton}
        </Button>
      </div>
    </form>
  );
};

export default Form;
