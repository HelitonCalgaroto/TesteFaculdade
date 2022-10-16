import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plano } from './plano.entity';

interface Request {
    CodPessoa: number; 
    CodTipoPlano: number;
}

@Injectable()
export class PlanoService {
    constructor(
    @InjectRepository(Plano)
    private PlanoRepository: Repository<Plano>,
    ) {}

    async create({ CodPessoa, CodTipoPlano }: Request): Promise<Plano> {
    const plano = await this.PlanoRepository.create({
        CodPessoa,
        CodTipoPlano
    });

    await this.PlanoRepository.save(plano);

    return plano;
    }

    async findAll(): Promise<Plano[]> {
    const plano = await this.PlanoRepository.find();

    return plano;
    }

    async delete(id: number): Promise<void>{
        this.PlanoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.PlanoRepository.update(id, DadosAtualizar);
    }
}