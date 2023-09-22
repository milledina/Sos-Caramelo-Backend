import { ApiProperty } from "@nestjs/swagger";
import internal from "stream";

export class CreateAnimaiDto {
    @ApiProperty()
    nome: string
    @ApiProperty({required: true})
    tipo: string
    @ApiProperty()
    idade: string
    @ApiProperty()
    descricao: string
    @ApiProperty({required: true})
    localizacao: string
    @ApiProperty({required: true})
    status: string
}
