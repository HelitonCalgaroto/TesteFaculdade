import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { BairroService } from './bairro.service';

@Controller('bairro')
class BairroController {
    constructor(private readonly service: BairroService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { BairroDescricao } = request.body;

    const bairro = await this.service.create({ BairroDescricao });

    return response.json(bairro).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const bairros = await this.service.findAll();

    return response.json(bairros).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idBairro')
    remove(@Param('idBairro') idBairro: number) {
        return "O registro " + idBairro + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { BairroController };