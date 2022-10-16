import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AnuncioService } from './anuncio.service';

@Controller('anuncio')
class AnuncioController {
    constructor(private readonly service: AnuncioService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { AnuncioQntViews, AnuncioQntLinks, CodImovel, AnuncioDestaque } = request.body;

    const anuncio = await this.service.create({ AnuncioQntViews, AnuncioQntLinks, CodImovel, AnuncioDestaque});

    return response.json(anuncio).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const anuncios = await this.service.findAll();

    return response.json(anuncios).send();
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

export { AnuncioController };