import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PessoasService } from './pessoas.service';

@Controller('pessoas')
class PessoasController {
  constructor(private readonly service: PessoasService) {}

  @Post('/')
  async create(@Req() request: Request, @Res() response: Response) {
    const { pessoaNome, CodEndereco, CodContato } = request.body;

    const pessoa = await this.service.create({ pessoaNome, CodEndereco, CodContato});

    return response.json(pessoa).send();
  }

  @Get('/')
  async findAll(@Res() response: Response) {
    const pessoas = await this.service.findAll();

    return response.json(pessoas).send();
  }
}

export { PessoasController };