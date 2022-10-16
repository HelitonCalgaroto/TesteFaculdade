import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoPlano } from './tipoplano.entity';

interface Request {
    PlanoNome: string;
    PlanoQuantidadePublicacao: number;
}

@Injectable()
export class TipoPlanoService {
    constructor(
    @InjectRepository(TipoPlano)
    private TipoPlanoRepository: Repository<TipoPlano>,
    ) {}

    async create({ PlanoNome, PlanoQuantidadePublicacao }: Request): Promise<TipoPlano> {
    const tipoPlano = await this.TipoPlanoRepository.create({
        PlanoNome,
        PlanoQuantidadePublicacao
    });

    await this.TipoPlanoRepository.save(tipoPlano);

    return tipoPlano;
    }

    async findAll(): Promise<TipoPlano[]> {
    const tipoPlano = await this.TipoPlanoRepository.find();

    return tipoPlano;
    }

    async delete(id: number): Promise<void>{
        this.TipoPlanoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.TipoPlanoRepository.update(id, DadosAtualizar);
    }
}
