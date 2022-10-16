import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

interface Request {
    PessoaNome: string;
    CodEndereco: number;
    CodContato: number;
}

@Injectable()
export class PessoaService {
    constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
    ) {}

    async create({ PessoaNome, CodEndereco, CodContato }: Request): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.create({
        PessoaNome,
        CodEndereco,
        CodContato,
    });

    await this.pessoaRepository.save(pessoa);

    return pessoa;
    }

    async findAll(): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.find();

    return pessoa;
    }

    async delete(id: number): Promise<void>{
        this.pessoaRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.pessoaRepository.update(id, DadosAtualizar);
    }
}
