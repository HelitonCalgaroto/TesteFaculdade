import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoas.entity';

interface Request {
  pessoaNome: string;
  CodEndereco: number;
  CodContato: number;
}

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoasRepository: Repository<Pessoa>,
  ) {}

  async create({ pessoaNome, CodEndereco, CodContato }: Request): Promise<Pessoa> {
    const pessoa = await this.pessoasRepository.create({
      pessoaNome,
      CodEndereco,
      CodContato,
    });

    await this.pessoasRepository.save(pessoa);

    return pessoa;
  }

  async findAll(): Promise<Pessoa[]> {
    const pessoa = await this.pessoasRepository.find();

    return pessoa;
  }
}
