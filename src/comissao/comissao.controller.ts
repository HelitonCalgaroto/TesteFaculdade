import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ComissaoService } from './comissao.service';

@Controller('comissao')
class ComissaoController {
    constructor(private readonly service: ComissaoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodImovel, CodPessoa, TransacaoComissaoPlataforma } = request.body;

    const comissao = await this.service.create({ CodImovel, CodPessoa, TransacaoComissaoPlataforma });

    return response.json(comissao).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const comissoes = await this.service.findAll();

    return response.json(comissoes).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idComissao')
    remove(@Param('idComissao') idComissao: number) {
        return "O registro " + idComissao + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { ComissaoController };