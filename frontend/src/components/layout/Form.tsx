import { useState } from "react";
import FormInput from "../ui/formInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState<string>();
  const [otherGender, setOtherGender] = useState<string>();
  return (
    <form className="flex flex-col gap-4">
      <FormInput
        label="Nome"
        name="name"
        type="text"
        placeholder="Insira o nome do filme"
        value=""
        onChange={() => {}}
        required={true}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-semibold">
          Descrição <span className="text-red-500">*</span>
        </label>
        <Textarea
          placeholder="Insira a descrição do filme"
          required
          name="description"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <FormInput
          label="Diretor"
          name="director"
          type="text"
          placeholder="Insira o nome do diretor do filme"
          value=""
          onChange={() => {}}
          required={true}
        />
        <FormInput
          label="Duração"
          name="duration"
          type="number"
          placeholder="Insira a duração do filme em minutos"
          value=""
          onChange={() => {}}
          required={true}
        />
        <FormInput
          label="Ano de lançamento"
          name="releaseYear"
          type="number"
          placeholder="2025"
          value=""
          onChange={() => {}}
          required={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="gender" className="text-sm font-semibold">
          Gênero <span className="text-red-500">*</span>
        </label>
        <Select value={gender} onValueChange={setGender}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o gênero" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="action">Ação</SelectItem>
              <SelectItem value="comedy">Comédia</SelectItem>
              <SelectItem value="drama">Drama</SelectItem>
              <SelectItem value="horror">Terror</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="thriller">Suspense</SelectItem>
              <SelectItem value="documentary">Documentário</SelectItem>
              <SelectItem value="adventure">Aventura</SelectItem>
              <SelectItem value="animation">Animação</SelectItem>
              <SelectItem value="biography">Biografia</SelectItem>
              <SelectItem value="crime">Crime</SelectItem>
              <SelectItem value="fantasy">Fantasia</SelectItem>
              <SelectItem value="history">História</SelectItem>
              <SelectItem value="mystery">Mistério</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {gender === "other" && (
        <FormInput
          label="Outro gênero"
          name="otherGender"
          type="text"
          placeholder="Insira o gênero do filme"
          value={otherGender || ""}
          onChange={(e) => setOtherGender(e.target.value)}
          required={true}
        />
      )}
      <FormInput
        label="Poster"
        name="image"
        type="text"
        placeholder="https://exemplo.com/poster.jpg"
        value=""
        onChange={() => {}}
        required={true}
      />
      <FormInput
        label="Trailer"
        name="trailer"
        type="text"
        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        value=""
        onChange={() => {}}
        required={true}
      />
      <div className="w-full flex gap-4 mt-4">
        <Button
          variant="default"
          className="flex-1"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Cancelar
        </Button>
        <a href="/" className="flex-1">
          <Button variant="blue" className="w-full">
            Adicionar
          </Button>
        </a>
      </div>
    </form>
  );
};

export default Form;
