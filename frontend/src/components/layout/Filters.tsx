import { Plus, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import type { Movie } from "@/types/Movie";
import { useState } from "react";
import { Separator } from "../ui/separator";

interface FiltersProps {
  movies: Movie[];
  onGenderChange: (gender: string) => void;
  onSearchChange: (search: string) => void;
}

const Filters = ({ movies, onGenderChange, onSearchChange }: FiltersProps) => {
  const [selectedGender, setSelectedGender] = useState<string | undefined>("");
  const uniqueGenres = Array.from(
    new Set(movies.map((movie: Movie) => movie.gender))
  );

  const handleGenderChange = (gender: string) => {
    if (gender === "clear") {
      setSelectedGender("");
      onGenderChange("");
    } else {
      setSelectedGender(gender);
      onGenderChange(gender);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col gap-3 md:flex-row md:max-w-[70%] m-auto">
      <div className="border border-muted-foreground rounded-sm flex items-center gap-2 px-2 py-3 flex-1">
        <Search size={16} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Pesquisar filmes..."
          className="text-sm outline-none w-full border-none pr-2 placeholder:text-muted-foreground"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4 flex-1">
        <Select value={selectedGender} onValueChange={handleGenderChange}>
          <SelectTrigger className="flex-1 bg-transparent">
            <SelectValue placeholder="Gênero" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {uniqueGenres.map((gender: string) => (
                <SelectItem key={gender} value={gender}>
                  {gender}
                </SelectItem>
              ))}
              <Separator />
              <SelectItem value="clear" disabled={selectedGender === ""}>
                Limpar
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="flex-1"
          variant="blue"
          onClick={() => {
            navigate("/create");
          }}
        >
          <Plus size={16} />
          <span>Adicionar</span>
        </Button>
      </div>
    </div>
  );
};

export default Filters;
