import Form from "@/components/layout/Form";

const CreateOrEditMovie = () => {
  return (
    <div className="p-4 w-full md:max-w-[40%] m-auto">
      <h2 className="font-semibold text-3xl mb-2">Adicionar Filme</h2>
      <p className="text-sm text-muted-foreground max-w-[300px]">
        Preencha os campos abaixo para adicionar um novo filme ao catálogo.
      </p>
      <div className="bg-[#252A2F] p-4 rounded-sm mt-4 flex flex-col gap-4">
        <h3 className="font-semibold text-xl">Dados do Filme</h3>
        <Form />
      </div>
    </div>
  );
};

export default CreateOrEditMovie;
