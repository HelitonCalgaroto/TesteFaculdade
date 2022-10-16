import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { TipoImovelService } from './tipoimovel.service';

@Controller('tipoimovel')
class TipoImovelController {
    constructor(private readonly service: TipoImovelService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { TipoImovelDescricao } = request.body;

    const tipoImovel = await this.service.create({ TipoImovelDescricao });

    return response.json(tipoImovel).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const tiposImoveis = await this.service.findAll();

    return response.json(tiposImoveis).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idTipoImovel')
    remove(@Param('idTipoImovel') idTipoImovel: number) {
        return "O registro " + idTipoImovel + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { TipoImovelController };