import { formatDuration } from "@/utils/formatDuration";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loader } from "lucide-react";

// LEMBRAR DE VERIFICAR SE TEM IMAGEM, SE NÃO TIVER, USAR UMA IMAGEM PADRÃO
interface MovieCardProps {
  id: string | undefined;
  title: string;
  releaseYear: number;
  gender: string;
  duration: number;
  imageUrl: string;
}

const MovieCard = ({
  id,
  title,
  releaseYear,
  gender,
  duration,
  imageUrl,
}: MovieCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <Card className="relative group overflow-hidden">
      <CardContent className="w-full h-full">
        {!imgLoaded && !imgError && (
          <div className="w-full h-full bg-muted-foreground flex items-center justify-center flex-col">
            <Loader className="animate-spin" />
            carregando imagem...
          </div>
        )}
        {imgError && (
          <div className="w-full h-full bg-muted-foreground flex items-center justify-center flex-col">
            <p>Erro ao carregar a imagem!</p>
            <span className="text-xs">Edite a URL e tente novamente!</span>
          </div>
        )}

        {!imgError && (
          <img
            src={imageUrl}
            alt={title}
            onError={() => setImgError(true)}
            onLoad={() => setImgLoaded(true)}
            className="w-full h-full object-fit object-center brightness-[65%]"
          />
        )}
        <div
          className="absolute bottom-4 left-0 px-3 w-full flex flex-col gap-4 text-background 
                    transition-all duration-500 ease-in-out translate-y-0 opacity-100
                    md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <h2 className="font-semibold text-xl truncate capitalize">{title}</h2>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-2 ">
              <Badge variant="default">{gender}</Badge>
              <div className="flex gap-2 font-semibold">
                <span className="text-sm">{releaseYear}</span>
                <Separator orientation="vertical" />
                <span className="text-sm">{formatDuration(duration)}</span>
              </div>
            </div>
            <Link to={`/details/${id}`} className="w-full">
              <Button variant="blue" className="py-2 px-4 text-sm w-full">
                Saber mais
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
