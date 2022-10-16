import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
class PessoaController {
    constructor(private readonly service: PessoaService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { PessoaNome, CodEndereco, CodContato } = request.body;

    const pessoa = await this.service.create({ PessoaNome, CodEndereco, CodContato});

    return response.json(pessoa).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const pessoas = await this.service.findAll();

    return response.json(pessoas).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { PessoaController };