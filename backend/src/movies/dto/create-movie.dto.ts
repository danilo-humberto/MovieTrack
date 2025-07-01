import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty({ message: "O título é obrigatório!" })
  title: string;

  @IsString()
  @IsNotEmpty({ message: "A descrição é obrigatório!" })
  description: string;

  @IsInt()
  @IsNotEmpty({ message: "O ano de lançamento é obrigatório!" })
  releaseYear: number;

  @IsString()
  @IsNotEmpty({ message: "O gênero é obrigatório!" })
  gender: string;

  @IsString()
  @IsNotEmpty({ message: "O nome do diretor é obrigatório!" })
  director: string;

  @IsString()
  @IsNotEmpty({ message: "A url da imagem é obrigatória!" })
  imageUrl: string;

  @IsOptional()
  @IsUrl({}, { message: "A url do trailer é inválida!" })
  trailerUrl?: string;
}
