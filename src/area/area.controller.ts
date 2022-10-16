import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AreaService } from './area.service';

@Controller('area')
class AreaController {
    constructor(private readonly service: AreaService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodImovelCaracteristica, 
            AreaImovel, 
            AreaCozinha, 
            AreaQuarto, 
            AreaGaragem, 
            AreaLavanderia, 
            AreaSala } = request.body;

    const area = await this.service.create({    CodImovelCaracteristica, 
                                                AreaImovel, 
                                                AreaCozinha, 
                                                AreaQuarto, 
                                                AreaGaragem, 
                                                AreaLavanderia, 
                                                AreaSala});

    return response.json(area).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const areas = await this.service.findAll();

    return response.json(areas).send();
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

export { AreaController };