import { Button } from "@/components/ui/button";
import { formatDuration } from "@/utils/formatDuration";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
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
import { useDeleteMovie, useMovieById } from "@/hooks/useMovies";
import getYouTubeVideoId from "@/utils/getYoutubeVideoId";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useMovieById(id || "");

  const { isPending, mutate } = useDeleteMovie();

  const handleDeleteMovie = () => {
    if (id) {
      mutate(id, {
        onSuccess: () => {
          toast.success("Filme deletado com sucesso");
          navigate("/");
        },
        onError: () => {
          toast.error("Erro ao deletar filme");
        },
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center mt-20">
          <LoaderCircle className="animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center mt-20 flex-col gap-4">
          <p className="text-ring">Filme não encontrado.</p>
          <Button variant="blue" onClick={() => navigate("/")}>
            Voltar para o menu
          </Button>
        </div>
      ) : (
        <div className="p-4 flex flex-col gap-6 md:max-w-[70%] mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft />
            </Button>
            <h2 className="font-semibold text-2xl truncate">{data.title}</h2>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <img
              src={data.imageUrl}
              alt={data.title}
              onError={(e) => (e.currentTarget.src = "/Image-not-found.png")}
              className="w-[356px] h-[475px] object-cover brightness-[65%] rounded-sm shadow shadow-muted-foreground"
            />
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
                <h3 className="font-semibold text-xl">Sinopse</h3>
                <p className="text-ring text-sm break-words">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
                <h3 className="font-semibold text-xl">Detalhes do Filme</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <h4 className="text-ring">Diretor</h4>
                    <p className="break-words">{data.director}</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="text-ring">Gênero</h4>
                    <p className="break-words">{data.gender}</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="text-ring">Ano de Lançamento</h4>
                    <p className="break-words">{data.releaseYear}</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="text-ring">Duração</h4>
                    <p className="break-words">
                      {formatDuration(data.duration)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#252A2F] p-4 rounded-sm border border-muted-foreground">
                <h3 className="font-semibold text-xl">Trailer</h3>
                <div className="flex items-center justify-center">
                  {data.trailerUrl ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                        data.trailerUrl
                      )}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-[250px] rounded-md md:w-[400px]"
                    ></iframe>
                  ) : (
                    <p className="text-muted-foreground">Não possui trailer</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="blue"
                  className="flex-1"
                  onClick={() => navigate(`/edit/${id}`)}
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
                        onClick={handleDeleteMovie}
                      >
                        {isPending ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          "Deletar"
                        )}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
