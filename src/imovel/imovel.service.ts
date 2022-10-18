import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from 'src/endereco/endereco.entity';
import { Caracteristica } from 'src/imovelcaracteristica/imovelcaracteristica.entity';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import { TipoImovel } from 'src/tipoimovel/tipoimovel.entity';
import { TipoServico } from 'src/tiposervico/tiposervico.entity';
import { Repository } from 'typeorm';
import { Imovel } from './imovel.entity';

interface Request {
    CodEndereco: Endereco;
    CodTipoImovel: TipoImovel;
    CodTipoServico: TipoServico;
    CodPessoa: Pessoa;
    ImovelValor: number;
    CodImovelCaracteristica: Caracteristica;
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
