import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { PublicidadeService } from './publicidade.service';

@Controller('publicidade')
class PublicidadeController {
    constructor(private readonly service: PublicidadeService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodPessoa, PublicidadeTempo, PublicidadeDestaque, PublicidadeURL } = request.body;

    const publicidade = await this.service.create({ CodPessoa, PublicidadeTempo, PublicidadeDestaque, PublicidadeURL });

    return response.json(publicidade).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const publicidades = await this.service.findAll();

    return response.json(publicidades).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idPublicidade')
    remove(@Param('idPublicidade') idPublicidade: number) {
        return "O registro " + idPublicidade + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { PublicidadeController };