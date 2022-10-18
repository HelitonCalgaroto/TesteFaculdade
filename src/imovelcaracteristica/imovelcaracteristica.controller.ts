import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ImovelCaracteristicaService } from './imovelcaracteristica.service';

@Controller('pessoas')
class ImovelCaracteristicaController {
    constructor(private readonly service: ImovelCaracteristicaService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CaracteristicaCondominio, 
            CaracteristicaValorCondominio, 
            CaracteristicaQtdQuartos, 
            CaracteristicaCozinha, 
            CaracteristicaLavanderia, 
            CaracteristicaSala, 
            CaracteristicaPiscina, 
            CaracteristicaVagaGaragem } = request.body;

    const imovelcaracteristica = await this.service.create({    CaracteristicaCondominio, 
                                                                CaracteristicaValorCondominio, 
                                                                CaracteristicaQtdQuartos, 
                                                                CaracteristicaCozinha, 
                                                                CaracteristicaLavanderia, 
                                                                CaracteristicaSala, 
                                                                CaracteristicaPiscina, 
                                                                CaracteristicaVagaGaragem });

    return response.json(imovelcaracteristica).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const imoveiscaracteristicas = await this.service.findAll();

    return response.json(imoveiscaracteristicas).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idImovelCaracteristica')
    remove(@Param('idImovelCaracteristica') idImovelCaracteristica: number) {
        return "O registro " + idImovelCaracteristica + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { ImovelCaracteristicaController };