import { IsInt, IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  releaseYear: number;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  director: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsOptional()
  @IsUrl({}, { message: "A url do trailer é inválida!" })
  trailerUrl?: string;
}
