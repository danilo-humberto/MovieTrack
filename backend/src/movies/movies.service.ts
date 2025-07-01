import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateMovieDto) {
    try {
      const movie = await this.prisma.movie.create({
        data: {
          title: dto.title,
          description: dto.description,
          releaseYear: dto.releaseYear,
          gender: dto.gender,
          director: dto.director,
          imageUrl: dto.imageUrl,
          trailerUrl: dto.trailerUrl,
        },
      });
      return movie;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === "P2002" &&
        error.message.includes("title")
      ) {
        throw new ConflictException("O filme ja existe.");
      }
      throw new InternalServerErrorException("Erro ao criar filme.");
    }
  }

  async findAll() {
    try {
      return await this.prisma.movie.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch {
      throw new InternalServerErrorException("Erro ao buscar filmes.");
    }
  }

  async findOne(id: string) {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) throw new NotFoundException("Filme não encontrado.");

    return movie;
  }

  async update(id: string, dto: UpdateMovieDto) {
    const exists = await this.prisma.movie.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException("Filme não encontrado.");

    try {
      return await this.prisma.movie.update({
        where: { id },
        data: {
          title: dto.title,
          description: dto.description,
          releaseYear: dto.releaseYear,
          gender: dto.gender,
          director: dto.director,
          imageUrl: dto.imageUrl,
          trailerUrl: dto.trailerUrl,
        },
      });
    } catch {
      throw new InternalServerErrorException("Erro ao atualizar filme.");
    }
  }

  async remove(id: string) {
    const exists = await this.prisma.movie.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException("Filme não encontrado.");

    try {
      return await this.prisma.movie.delete({ where: { id } });
    } catch {
      throw new InternalServerErrorException("Erro ao deletar filme.");
    }
  }
}
