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

const Filters = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col gap-3 md:flex-row md:max-w-[70%] m-auto">
      <div className="border border-muted-foreground rounded-sm flex items-center gap-2 px-2 py-3 flex-1">
        <Search size={16} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Pesquisar filmes..."
          className="text-sm outline-none w-full border-none pr-2 placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-4 flex-1">
        <Select>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Gênero" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="action">Ação</SelectItem>
              <SelectItem value="comedy">Comédia</SelectItem>
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
