import { Controller, Get, Post, Put, Delete, Req, Res, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AviseMeService } from './aviseme.service';

@Controller('aviseme')
class AviseMeController {
    constructor(private readonly service: AviseMeService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
    const { CodPessoa, 
            CodImovelCaracteristica, 
            CodImovel, 
            AviseMeEncontrado } = request.body;

    const aviseme = await this.service.create({ CodPessoa, 
                                                CodImovelCaracteristica, 
                                                CodImovel, 
                                                AviseMeEncontrado});

    return response.json(aviseme).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
    const avisemeAll = await this.service.findAll();

    return response.json(avisemeAll).send();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() DadosAtualizar: {}) {
        await this.service.update(id, DadosAtualizar);
        return "O registro foi atualizado na tabela, conforme os dados informados!";
    }

    @Delete(':idAviseme')
    remove(@Param('idAviseme') idAviseme: number) {
        return "O registro " + idAviseme + " foi removido.";
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);
        return "O registro " + id + " foi removido.";
    }
}

export { AviseMeController };