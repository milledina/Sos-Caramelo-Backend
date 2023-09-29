import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';

@Injectable()
export class ChamadosService {
  constructor(private prisma: PrismaService){}
  create(createChamadoDto: CreateChamadoDto) {
    return this.prisma.chamados.create({data: createChamadoDto});
  }

  findAll() {
    return this.prisma.chamados.findMany();
  }

  findOne(id: number) {
    return this.prisma.chamados.findUnique({where: {id}});
  }

  update(id: number, updateChamadoDto: UpdateChamadoDto) {
    return this.prisma.chamados.update({
      where: {id},
      data: updateChamadoDto,
    });
  }

  remove(id: number) {
    return this.prisma.chamados.delete({where: {id}});
  }
}
