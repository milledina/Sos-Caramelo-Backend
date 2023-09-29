import { ApiProperty } from "@nestjs/swagger";

export class CreateChamadoDto {
    @ApiProperty()
    id_solicitacao: string
    @ApiProperty({required: true})
    tipo_solicitacao: string
    @ApiProperty({required: true})
    descricao_solicitacao: string
    @ApiProperty()
    imagem_solicitacao: string
}

