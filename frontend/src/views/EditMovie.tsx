import Form from "@/components/layout/Form";

const EditMovie = () => {
  return (
    <div className="p-4 w-full md:max-w-[40%] m-auto">
      <h2 className="font-semibold text-3xl mb-2">Editar Filme</h2>
      <p className="text-sm text-muted-foreground max-w-[300px] md:max-w-full">
        Preencha os campos abaixo para editar o filme do catálogo.
      </p>
      <div className="bg-[#252A2F] p-4 rounded-sm mt-4 flex flex-col gap-4">
        <h3 className="font-semibold text-xl">Dados do Filme</h3>
        <Form labelButton="Editar Filme" />
      </div>
    </div>
  );
};

export default EditMovie;
