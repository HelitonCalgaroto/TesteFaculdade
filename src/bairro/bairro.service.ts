import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bairro } from './bairro.entity';

interface Request {
    BairroDescricao: string;
}

@Injectable()
export class BairroService {
    constructor(
    @InjectRepository(Bairro)
    private BairroRepository: Repository<Bairro>,
    ) {}

    async create({ BairroDescricao }: Request): Promise<Bairro> {
    const bairro = await this.BairroRepository.create({
        BairroDescricao,
    });

    await this.BairroRepository.save(bairro);

    return bairro;
    }

    async findAll(): Promise<Bairro[]> {
    const bairro = await this.BairroRepository.find();

    return bairro;
    }

    async delete(id: number): Promise<void>{
        this.BairroRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.BairroRepository.update(id, DadosAtualizar);
    }
}
