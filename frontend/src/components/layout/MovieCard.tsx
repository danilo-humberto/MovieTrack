import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const MovieCard = () => {
  return (
    <Card className="relative">
      <CardContent className="w-full h-full">
        <img
          src="https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
          alt=""
          className="w-full h-full object-fit brightness-[65%]"
        />
        <div className="absolute bottom-4 flex flex-col gap-4 text-background px-4 w-full">
          <h2 className="font-semibold text-xl truncate">Matrix</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Badge variant="default">Ação</Badge>
              <div className="flex gap-2">
                <span className="text-sm">1999</span>
                <Separator orientation="vertical" />
                <span className="text-sm">2h 16m</span>
              </div>
            </div>
            <Button variant="blue" className="py-2 px-4 text-sm">
              Saber mais
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
