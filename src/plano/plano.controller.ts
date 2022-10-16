import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { PlanoService } from './plano.service';

@Controller('plano')
class PlanoController {
    constructor(private readonly service: PlanoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodPessoa, CodTipoPlano } = request.body;

    const plano = await this.service.create({ CodPessoa, CodTipoPlano });

    return response.json(plano).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const planos = await this.service.findAll();

    return response.json(planos).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idPlano')
    remove(@Param('idPlano') idPlano: number) {
        return "O registro " + idPlano + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { PlanoController };