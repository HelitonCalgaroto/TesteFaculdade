import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { RuaService } from './rua.service';

@Controller('rua')
class RuaController {
    constructor(private readonly service: RuaService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { RuaDescricao } = request.body;

    const rua = await this.service.create({ RuaDescricao });

    return response.json(rua).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const ruas = await this.service.findAll();

    return response.json(ruas).send();
    }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() anuncioUpdateDto: AnuncioUpdateDto) {
    //     return `This action updates a #${id} cat`;
    // }

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

export { RuaController };