import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoImovel } from './tipoimovel.entity';

interface Request {
    TipoImovelDescricao: string;
}

@Injectable()
export class TipoImovelService {
    constructor(
    @InjectRepository(TipoImovel)
    private TipoImovelRepository: Repository<TipoImovel>,
    ) {}

    async create({ TipoImovelDescricao }: Request): Promise<TipoImovel> {
    const tipoImovel = await this.TipoImovelRepository.create({
        TipoImovelDescricao
    });

    await this.TipoImovelRepository.save(tipoImovel);

    return tipoImovel;
    }

    async findAll(): Promise<TipoImovel[]> {
    const tipoImovel = await this.TipoImovelRepository.find();

    return tipoImovel;
    }

    async delete(id: number): Promise<void>{
        this.TipoImovelRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.TipoImovelRepository.update(id, DadosAtualizar);
    }
}
