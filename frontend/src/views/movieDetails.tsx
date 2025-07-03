import { Button } from "@/components/ui/button";
import { formatDuration } from "@/utils/formatDuration";
import { ArrowLeft } from "lucide-react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const MovieDetails = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <ArrowLeft />
        </Button>
        <h2 className="font-semibold text-2xl">Matrix</h2>
      </div>
      <div className="flex flex-col gap-8">
        <img
          src="https://www.estadao.com.br/resizer/v2/WAV2GHOQS5A73O5UQGN66EOB2Y.png?quality=80&auth=6085b9bf022c1f2fc9cb8e0cb7adc58eeca0ffbe9ba32f6649f7c54e755dedf7&width=640&height=853&focal=417,129"
          alt="Matrix"
          className="w-[356px] h-[475px] object-cover brightness-[65%] rounded-sm shadow shadow-muted-foreground"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
            <h3 className="font-semibold text-xl">Sinopse</h3>
            <p className="text-muted-foreground text-sm">teste</p>
          </div>

          <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
            <h3 className="font-semibold text-xl">Detalhes do Filme</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <h4 className="text-ring">Diretor</h4>
                <p>teste</p>
              </div>
              <div className="text-sm">
                <h4 className="text-ring">Gênero</h4>
                <p>Ação</p>
              </div>
              <div className="text-sm">
                <h4 className="text-ring">Ano de Lançamento</h4>
                <p>1999</p>
              </div>
              <div className="text-sm">
                <h4 className="text-ring">Duração</h4>
                <p>{formatDuration(160)}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
            <h3 className="font-semibold text-xl">Trailer</h3>
            <div className="rounded-md overflow-hidden">
              <LiteYouTubeEmbed id="vKQi3bBA1y8" title="Matrix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
