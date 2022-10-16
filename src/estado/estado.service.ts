import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './estado.entity';

interface Request {
    EstadoDescricao: string;
}

@Injectable()
export class EstadoService {
    constructor(
    @InjectRepository(Estado)
    private EstadoRepository: Repository<Estado>,
    ) {}

    async create({ EstadoDescricao }: Request): Promise<Estado> {
    const estado = await this.EstadoRepository.create({
        EstadoDescricao,
    });

    await this.EstadoRepository.save(estado);

    return estado;
    }

    async findAll(): Promise<Estado[]> {
    const estado = await this.EstadoRepository.find();

    return estado;
    }

    async delete(id: number): Promise<void>{
        this.EstadoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.EstadoRepository.update(id, DadosAtualizar);
    }
}
