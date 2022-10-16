import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Double, Repository } from 'typeorm';
import { Comissao } from './comissao.entity';

interface Request {
    CodImovel: number;
    CodPessoa: number;
    TransacaoComissaoPlataforma: number;
}

@Injectable()
export class ComissaoService {
    constructor(
    @InjectRepository(Comissao)
    private ComissaoRepository: Repository<Comissao>,
    ) {}

    async create({ CodImovel, CodPessoa, TransacaoComissaoPlataforma }: Request): Promise<Comissao> {
    const comissao = await this.ComissaoRepository.create({
        CodImovel,
        CodPessoa,
        TransacaoComissaoPlataforma,
    });

    await this.ComissaoRepository.save(comissao);

    return comissao;
    }

    async findAll(): Promise<Comissao[]> {
    const comissao = await this.ComissaoRepository.find();

    return comissao;
    }

    async delete(id: number): Promise<void>{
        this.ComissaoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.ComissaoRepository.update(id, DadosAtualizar);
    }
}
