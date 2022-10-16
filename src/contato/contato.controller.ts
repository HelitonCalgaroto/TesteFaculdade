import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ContatoService } from './contato.service';

@Controller('contato')
class ContatoController {
    constructor(private readonly service: ContatoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { ContatoTelefone, ContatoEmail } = request.body;

    const contato = await this.service.create({ ContatoTelefone, ContatoEmail });

    return response.json(contato).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const contatos = await this.service.findAll();

    return response.json(contatos).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idContato')
    remove(@Param('idContato') idContato: number) {
        return "O registro " + idContato + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { ContatoController };