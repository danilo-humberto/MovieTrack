import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-80.8px)] w-full flex flex-col items-center justify-center">
      <h1 className="text-9xl text-muted-foreground">404</h1>
      <p className="text-muted-foreground text-xl">Página não encontrada</p>
      <Button
        variant="blue"
        className="mt-4 w-50"
        onClick={() => navigate("/")}
      >
        Voltar para o menu
      </Button>
    </div>
  );
};

export default NotFound;
