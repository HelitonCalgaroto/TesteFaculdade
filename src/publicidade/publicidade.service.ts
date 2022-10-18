import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import { Repository } from 'typeorm';
import { Publicidade } from './publicidade.entity';

interface Request {
    CodPessoa: Pessoa;
    PublicidadeTempo: number;
    PublicidadeDestaque: boolean;
    PublicidadeURL: string;
}

@Injectable()
export class PublicidadeService {
    constructor(
    @InjectRepository(Publicidade)
    private PublicidadeRepository: Repository<Publicidade>,
    ) {}

    async create({ CodPessoa, PublicidadeTempo, PublicidadeDestaque, PublicidadeURL }: Request): Promise<Publicidade> {
    const publicidade = await this.PublicidadeRepository.create({
        CodPessoa,
        PublicidadeTempo,
        PublicidadeDestaque,
        PublicidadeURL
    });

    await this.PublicidadeRepository.save(publicidade);

    return publicidade;
    }

    async findAll(): Promise<Publicidade[]> {
    const publicidade = await this.PublicidadeRepository.find();

    return publicidade;
    }

    async delete(id: number): Promise<void>{
        this.PublicidadeRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.PublicidadeRepository.update(id, DadosAtualizar);
    }
}
