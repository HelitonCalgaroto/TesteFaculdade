import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from './endereco.entity';

interface Request {
    CodBairro: number;
    CodEstado: number;
    CodCidade: number;
    CodRua: number;
    EnderecoNumero: number;
}

@Injectable()
export class EnderecoService {
    constructor(
    @InjectRepository(Endereco)
    private EnderecoRepository: Repository<Endereco>,
    ) {}

    async create({ CodBairro, CodEstado, CodCidade, CodRua, EnderecoNumero }: Request): Promise<Endereco> {
    const endereco = await this.EnderecoRepository.create({
        CodBairro,
        CodEstado,
        CodCidade,
        CodRua,
        EnderecoNumero,
    });

    await this.EnderecoRepository.save(endereco);

    return endereco;
    }

    async findAll(): Promise<Endereco[]> {
    const endereco = await this.EnderecoRepository.find();

    return endereco;
    }

    async delete(id: number): Promise<void>{
        this.EnderecoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.EnderecoRepository.update(id, DadosAtualizar);
    }
}
