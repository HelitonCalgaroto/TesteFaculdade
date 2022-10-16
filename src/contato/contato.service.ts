import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';

interface Request {
    ContatoTelefone: string;
    ContatoEmail: string;
}

@Injectable()
export class ContatoService {
    constructor(
    @InjectRepository(Contato)
    private ContatoRepository: Repository<Contato>,
    ) {}

    async create({ ContatoTelefone, ContatoEmail }: Request): Promise<Contato> {
    const contato = await this.ContatoRepository.create({
        ContatoTelefone,
        ContatoEmail,
    });

    await this.ContatoRepository.save(contato);

    return contato;
    }

    async findAll(): Promise<Contato[]> {
    const contato = await this.ContatoRepository.find();

    return contato;
    }

    async delete(id: number): Promise<void>{
        this.ContatoRepository.delete(id);
    }

    async update(   id: number, DadosAtualizar: {}): Promise<void> {
        await this.ContatoRepository.update(id, DadosAtualizar);
    }
}
