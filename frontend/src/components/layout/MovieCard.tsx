import { formatDuration } from "@/utils/formatDuration";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

// LEMBRAR DE VERIFICAR SE TEM IMAGEM, SE NÃO TIVER, USAR UMA IMAGEM PADRÃO
interface MovieCardProps {
  title: string;
  releaseYear: number;
  gender: string;
  duration: number;
  imageUrl: string;
}

const MovieCard = ({
  title,
  releaseYear,
  gender,
  duration,
  imageUrl,
}: MovieCardProps) => {
  return (
    <Card className="relative">
      <CardContent className="w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          onError={(e) => (e.currentTarget.src = "/Image-not-found.png")}
          className="w-full h-full object-fit brightness-[65%] hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="absolute bottom-4 flex flex-col gap-4 text-background px-4 w-full">
          <h2 className="font-semibold text-xl truncate">{title}</h2>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-2 ">
              <Badge variant="default">{gender}</Badge>
              <div className="flex gap-2 font-semibold">
                <span className="text-sm">{releaseYear}</span>
                <Separator orientation="vertical" />
                <span className="text-sm">{formatDuration(duration)}</span>
              </div>
            </div>
            <a href="/details" className="w-full">
              <Button variant="blue" className="py-2 px-4 text-sm w-full">
                Saber mais
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
