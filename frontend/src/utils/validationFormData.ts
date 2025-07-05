import * as z from "zod/v4";

export const movieFormSchema = z.object({
  name: z
    .string()
    .min(1, "O nome do filme é obrigatório!")
    .max(100, "O nome do filme deve ter no máximo 100 caracteres!"),
  description: z
    .string()
    .min(1, "A descrição é obrigatório!")
    .max(1000, "A descrição deve ter no máximo 1000 caracteres!"),
  director: z
    .string()
    .min(1, "O nome do diretor é obrigatório!")
    .max(50, "O nome do diretor deve ter no máximo 50 caracteres!"),
  duration: z
    .string()
    .min(1, "A duração é obrigatória!")
    .refine(
      (value) => {
        if (!value) return true;
        return !isNaN(Number(value)) && Number(value) > 0;
      },
      {
        message: "A duração deve ser um número positivo!",
      }
    )
    .transform((value) => Number(value)),
  releaseYear: z
    .string()
    .min(1, "O ano de lançamento é obrigatório!")
    .refine(
      (value) => {
        if (!value) return true;
        return Number(value) >= 1900 && Number(value) > 2050;
      },
      {
        message: "Ano inválido!",
      }
    )
    .transform(Number),
  gender: z
    .string()
    .min(1, "O gênero é obrigatório!")
    .max(50, "O gênero deve ter no máximo 50 caracteres!"),
  imageUrl: z
    .string()
    .min(1, "A url da imagem é obrigatória!")
    .refine(
      (value) => {
        if (!value) return true;
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      },
      {
        message: "A url da imagem é inválida!",
      }
    ),
  trailerUrl: z
    .string()
    .min(1, "A url do trailer é obrigatória!")
    .refine(
      (value) => {
        if (!value) return true;
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      },
      {
        message: "A url do trailer é inválida!",
      }
    ),
});
