import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { EstadoService } from './estado.service';

@Controller('estado')
class EstadoController {
    constructor(private readonly service: EstadoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { EstadoDescricao } = request.body;

    const estado = await this.service.create({ EstadoDescricao });

    return response.json(estado).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const estados = await this.service.findAll();

    return response.json(estados).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idEstado')
    remove(@Param('idEstado') idEstado: number) {
        return "O registro " + idEstado + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { EstadoController };