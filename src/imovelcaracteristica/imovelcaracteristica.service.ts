import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImovelCaracteristica } from './imovelcaracteristica.entity';

interface Request {
    ImovelCaracteristicaCondominio: boolean;
    ImovelCaracteristicaValorCondominio: number;
    ImovelCaracteristicaQtdQuartos: number;
    ImovelCaracteristicaCozinha: number;
    ImovelCaracteristicaLavanderia: number;
    ImovelCaracteristicaSala: number;
    ImovelCaracteristicaPiscina: number;
    ImovelCaracteristicaVagaGaragem: number;
}

@Injectable()
export class ImovelCaracteristicaService {
    constructor(
    @InjectRepository(ImovelCaracteristica)
    private ImovelCaracteristicaRepository: Repository<ImovelCaracteristica>,
    ) {}

    async create({  ImovelCaracteristicaCondominio, 
                    ImovelCaracteristicaValorCondominio, 
                    ImovelCaracteristicaQtdQuartos,
                    ImovelCaracteristicaCozinha,
                    ImovelCaracteristicaLavanderia,
                    ImovelCaracteristicaSala,
                    ImovelCaracteristicaPiscina,
                    ImovelCaracteristicaVagaGaragem }: Request): Promise<ImovelCaracteristica> {
    const imovelcaracteristica = await this.ImovelCaracteristicaRepository.create({
        ImovelCaracteristicaCondominio, 
        ImovelCaracteristicaValorCondominio, 
        ImovelCaracteristicaQtdQuartos,
        ImovelCaracteristicaCozinha,
        ImovelCaracteristicaLavanderia,
        ImovelCaracteristicaSala,
        ImovelCaracteristicaPiscina,
        ImovelCaracteristicaVagaGaragem
    });

    await this.ImovelCaracteristicaRepository.save(imovelcaracteristica);

    return imovelcaracteristica;
    }

    async findAll(): Promise<ImovelCaracteristica[]> {
    const imovelcaracteristica = await this.ImovelCaracteristicaRepository.find();

    return imovelcaracteristica;
    }

    async delete(id: number): Promise<void>{
        this.ImovelCaracteristicaRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.ImovelCaracteristicaRepository.update(id, DadosAtualizar);
    }
}