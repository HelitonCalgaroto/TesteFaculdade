import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { TipoServicoService } from './tiposervico.service';

@Controller('tiposervico')
class TipoServicoController {
    constructor(private readonly service: TipoServicoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { TipoServicoNome } = request.body;

    const tipoServico = await this.service.create({ TipoServicoNome });

    return response.json(tipoServico).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const tiposServicos = await this.service.findAll();

    return response.json(tiposServicos).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idTipoServico')
    remove(@Param('idTipoServico') idTipoServico: number) {
        return "O registro " + idTipoServico + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { TipoServicoController };