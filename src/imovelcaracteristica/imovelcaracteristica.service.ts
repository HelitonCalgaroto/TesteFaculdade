import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Caracteristica } from './imovelcaracteristica.entity';

interface Request {
    CaracteristicaCondominio: boolean;
    CaracteristicaValorCondominio: number;
    CaracteristicaQtdQuartos: number;
    CaracteristicaCozinha: number;
    CaracteristicaLavanderia: number;
    CaracteristicaSala: number;
    CaracteristicaPiscina: number;
    CaracteristicaVagaGaragem: number;
}

@Injectable()
export class ImovelCaracteristicaService {
    constructor(
    @InjectRepository(Caracteristica)
    private ImovelCaracteristicaRepository: Repository<Caracteristica>,
    ) {}

    async create({  CaracteristicaCondominio, 
                    CaracteristicaValorCondominio, 
                    CaracteristicaQtdQuartos,
                    CaracteristicaCozinha,
                    CaracteristicaLavanderia,
                    CaracteristicaSala,
                    CaracteristicaPiscina,
                    CaracteristicaVagaGaragem }: Request): Promise<Caracteristica> {
    const imovelcaracteristica = await this.ImovelCaracteristicaRepository.create({
        CaracteristicaCondominio, 
        CaracteristicaValorCondominio, 
        CaracteristicaQtdQuartos,
        CaracteristicaCozinha,
        CaracteristicaLavanderia,
        CaracteristicaSala,
        CaracteristicaPiscina,
        CaracteristicaVagaGaragem
    });

    await this.ImovelCaracteristicaRepository.save(imovelcaracteristica);

    return imovelcaracteristica;
    }

    async findAll(): Promise<Caracteristica[]> {
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