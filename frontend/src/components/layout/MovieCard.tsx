import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const MovieCard = () => {
  return (
    <Card className="w-[356px] h-[475px]">
      <CardContent className="relative">
        <img
          src="https://www.estadao.com.br/resizer/v2/WAV2GHOQS5A73O5UQGN66EOB2Y.png?quality=80&auth=6085b9bf022c1f2fc9cb8e0cb7adc58eeca0ffbe9ba32f6649f7c54e755dedf7&width=640&height=853&focal=417,129"
          alt=""
          className="w-full h-full object-cover brightness-[65%]"
        />
        <div className="absolute bottom-4 flex flex-col gap-6 text-background px-4 w-full">
          <h2 className="font-semibold text-2xl">Matrix</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Badge variant="default">Ação</Badge>
              <div className="flex gap-2">
                <span>1999</span>
                <Separator orientation="vertical" />
                <span>2h 16m</span>
              </div>
            </div>
            <Button variant="blue" className="py-2 px-4">
              Saber mais
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
