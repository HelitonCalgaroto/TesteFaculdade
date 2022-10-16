import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidade } from './cidade.entity';

interface Request {
    CidadeDescricao: string;
}

@Injectable()
export class CidadeService {
    constructor(
    @InjectRepository(Cidade)
    private CidadeRepository: Repository<Cidade>,
    ) {}

    async create({ CidadeDescricao }: Request): Promise<Cidade> {
    const cidade = await this.CidadeRepository.create({
        CidadeDescricao,
    });

    await this.CidadeRepository.save(cidade);

    return cidade;
    }

    async findAll(): Promise<Cidade[]> {
    const cidade = await this.CidadeRepository.find();

    return cidade;
    }

    async delete(id: number): Promise<void>{
        this.CidadeRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.CidadeRepository.update(id, DadosAtualizar);
    }
}
