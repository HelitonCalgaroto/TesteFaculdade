import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AviseMe } from './aviseme.entity';

interface Request {
    CodPessoa: number;
    CodImovelCaracteristica: number;
    CodImovel: number;
    AviseMeEncontrado: boolean;
}

@Injectable()
export class AviseMeService {
    constructor(
    @InjectRepository(AviseMe)
    private AviseMeRepository: Repository<AviseMe>,
    ) {}

    async create({ CodPessoa, CodImovelCaracteristica, CodImovel, AviseMeEncontrado }: Request): Promise<AviseMe> {
    const aviseme = await this.AviseMeRepository.create({
        CodPessoa,
        CodImovelCaracteristica,
        CodImovel,
        AviseMeEncontrado
    });

    await this.AviseMeRepository.save(aviseme);

    return aviseme;
    }

    async findAll(): Promise<AviseMe[]> {
    const aviseme = await this.AviseMeRepository.find();

    return aviseme;
    }

    async delete(id: number): Promise<void>{
        this.AviseMeRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.AviseMeRepository.update(id, DadosAtualizar);
    }
}
