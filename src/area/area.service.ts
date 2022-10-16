import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './area.entity';

interface Request {
    CodImovelCaracteristica: number;
    AreaImovel: number;
    AreaCozinha: number;
    AreaQuarto: number;
    AreaGaragem: number;
    AreaLavanderia: number;
    AreaSala: number;
}

@Injectable()
export class AreaService {
    constructor(
    @InjectRepository(Area)
    private AreaRepository: Repository<Area>,
    ) {}

    async create({  CodImovelCaracteristica, 
                    AreaImovel, 
                    AreaCozinha, 
                    AreaQuarto, 
                    AreaGaragem, 
                    AreaLavanderia, 
                    AreaSala }: Request): Promise<Area> {
    const area = await this.AreaRepository.create({
        CodImovelCaracteristica,
        AreaImovel,
        AreaCozinha,
        AreaQuarto,
        AreaGaragem,
        AreaLavanderia,
        AreaSala
    });

    await this.AreaRepository.save(area);

    return area;
    }

    async findAll(): Promise<Area[]> {
    const area = await this.AreaRepository.find();

    return area;
    }

    async delete(id: number): Promise<void>{
        this.AreaRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.AreaRepository.update(id, DadosAtualizar);
    }
}