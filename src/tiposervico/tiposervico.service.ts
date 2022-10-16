import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoServico } from './tiposervico.entity';

interface Request {
    TipoServicoNome: string;
}

@Injectable()
export class TipoServicoService {
    constructor(
    @InjectRepository(TipoServico)
    private TipoServicoRepository: Repository<TipoServico>,
    ) {}

    async create({ TipoServicoNome }: Request): Promise<TipoServico> {
    const tipoServico = await this.TipoServicoRepository.create({
        TipoServicoNome
    });

    await this.TipoServicoRepository.save(tipoServico);

    return tipoServico;
    }

    async findAll(): Promise<TipoServico[]> {
    const tipoServico = await this.TipoServicoRepository.find();

    return tipoServico;
    }

    async delete(id: number): Promise<void>{
        this.TipoServicoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.TipoServicoRepository.update(id, DadosAtualizar);
    }
}
