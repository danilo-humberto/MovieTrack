import { Button } from "@/components/ui/button";
import { formatDuration } from "@/utils/formatDuration";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const MovieDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col gap-6 md:max-w-[70%] mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeft />
        </Button>
        <h2 className="font-semibold text-2xl truncate">Matrix</h2>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <img
          src="https://www.estadao.com.br/resizer/v2/WAV2GHOQS5A73O5UQGN66EOB2Y.png?quality=80&auth=6085b9bf022c1f2fc9cb8e0cb7adc58eeca0ffbe9ba32f6649f7c54e755dedf7&width=640&height=853&focal=417,129"
          alt="Matrix"
          className="w-[356px] h-[475px] object-cover brightness-[65%] rounded-sm shadow shadow-muted-foreground"
        />
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
            <h3 className="font-semibold text-xl">Sinopse</h3>
            <p className="text-muted-foreground text-sm break-words">teste</p>
          </div>

          <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
            <h3 className="font-semibold text-xl">Detalhes do Filme</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <h4 className="text-ring">Diretor</h4>
                <p className="break-words">teste</p>
              </div>
              <div className="text-sm">
                <h4 className="text-ring">Gênero</h4>
                <p className="break-words">Ação</p>
              </div>
              <div className="text-sm">
                <h4 className="text-ring">Ano de Lançamento</h4>
                <p className="break-words">1999</p>
              </div>
              <div className="text-sm">
                <h4 className="text-ring">Duração</h4>
                <p className="break-words">{formatDuration(160)}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
            <h3 className="font-semibold text-xl">Trailer</h3>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/vKQi3bBA1y8?si=4ILITRDqJ_yJ6XL4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-[250px] rounded-md md:w-[400px]"
              ></iframe>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="blue"
              className="flex-1"
              onClick={() => navigate("/edit")}
            >
              Editar
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="flex-1">
                  Deletar
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  Você deseja realmente apagar esse filme?
                </AlertDialogHeader>
                <AlertDialogDescription>
                  Essa ação não poderá ser desfeita. Isso vai apagar
                  permanentemente o filme do seu catálogo.
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel className="flex-1">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="flex-1"
                    onClick={() => {
                      toast.success("Filme apagado com sucesso!");
                    }}
                  >
                    Apagar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
