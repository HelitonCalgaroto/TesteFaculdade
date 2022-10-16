import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Imovel } from './imovel.entity';

interface Request {
    CodEndereco: number;
    CodTipoImovel: number;
    CodTipoServico: number;
    CodPessoa: number;
    ImovelValor: number;
    CodImovelCaracteristica: number;
}

@Injectable()
export class ImovelService {
    constructor(
    @InjectRepository(Imovel)
    private ImovelRepository: Repository<Imovel>,
    ) {}

    async create({  CodEndereco, 
                    CodTipoImovel, 
                    CodTipoServico, 
                    CodPessoa,
                    ImovelValor, 
                    CodImovelCaracteristica }: Request): Promise<Imovel> {
    const imovel = await this.ImovelRepository.create({
        CodEndereco,
        CodTipoImovel,
        CodTipoServico,
        CodPessoa,
        ImovelValor,
        CodImovelCaracteristica
    });

    await this.ImovelRepository.save(imovel);

    return imovel;
    }

    async findAll(): Promise<Imovel[]> {
    const imovel = await this.ImovelRepository.find();

    return imovel;
    }

    async delete(id: number): Promise<void>{
        this.ImovelRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.ImovelRepository.update(id, DadosAtualizar);
    }
}
