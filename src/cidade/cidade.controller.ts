import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CidadeService } from './cidade.service';

@Controller('cidade')
class CidadeController {
    constructor(private readonly service: CidadeService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CidadeDescricao } = request.body;

    const cidade = await this.service.create({ CidadeDescricao });

    return response.json(cidade).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const cidades = await this.service.findAll();

    return response.json(cidades).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idCidade')
    remove(@Param('idCidade') idCidade: number) {
        return "O registro " + idCidade + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { CidadeController };