import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { TipoPlanoService } from './tipoplano.service';

@Controller('tipoplano')
class TipoPlanoController {
    constructor(private readonly service: TipoPlanoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { PlanoNome, PlanoQuantidadePublicacao } = request.body;

    const tipoPlano = await this.service.create({ PlanoNome, PlanoQuantidadePublicacao });

    return response.json(tipoPlano).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const tiposPlanos = await this.service.findAll();

    return response.json(tiposPlanos).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idTipoPlano')
    remove(@Param('idTipoPlano') idTipoPlano: number) {
        return "O registro " + idTipoPlano + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { TipoPlanoController };