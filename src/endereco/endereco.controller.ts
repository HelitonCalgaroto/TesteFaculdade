import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
class EnderecoController {
    constructor(private readonly service: EnderecoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodBairro, CodEstado, CodCidade, CodRua, EnderecoNumero } = request.body;

    const endereco = await this.service.create({ CodBairro, 
                                                CodEstado, 
                                                CodCidade, 
                                                CodRua, 
                                                EnderecoNumero });

    return response.json(endereco).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const enderecos = await this.service.findAll();

    return response.json(enderecos).send();
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

export { EnderecoController };