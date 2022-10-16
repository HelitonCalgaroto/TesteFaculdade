import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ImovelService } from './imovel.service';

@Controller('imovel')
class ImovelController {
    constructor(private readonly service: ImovelService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodEndereco, 
            CodTipoImovel, 
            CodTipoServico, 
            CodPessoa, 
            ImovelValor, 
            CodImovelCaracteristica } = request.body;

    const imovel = await this.service.create({ CodEndereco, 
                                                CodTipoImovel, 
                                                CodTipoServico, 
                                                CodPessoa, 
                                                ImovelValor, 
                                                CodImovelCaracteristica });

    return response.json(imovel).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const imoveis = await this.service.findAll();

    return response.json(imoveis).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idImovel')
    remove(@Param('idImovel') idImovel: number) {
        return "O registro " + idImovel + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { ImovelController };