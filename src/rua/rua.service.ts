import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rua } from './rua.entity';

interface Request {
    RuaDescricao: string;
}

@Injectable()
export class RuaService {
    constructor(
    @InjectRepository(Rua)
    private RuaRepository: Repository<Rua>,
    ) {}

    async create({ RuaDescricao }: Request): Promise<Rua> {
    const rua = await this.RuaRepository.create({
        RuaDescricao,
    });

    await this.RuaRepository.save(rua);

    return rua;
    }

    async findAll(): Promise<Rua[]> {
    const rua = await this.RuaRepository.find();

    return rua;
    }

    async delete(id: number): Promise<void>{
        this.RuaRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.RuaRepository.update(id, DadosAtualizar);
    }
}
