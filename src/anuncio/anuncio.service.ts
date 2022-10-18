import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Imovel } from 'src/imovel/imovel.entity';
import { Repository } from 'typeorm';
import { Anuncio } from './anuncio.entity';

interface Request {
    AnuncioQntViews: number;
    AnuncioQntLinks: number;
    CodImovel: Imovel;
    AnuncioDestaque: boolean;
}

@Injectable()
export class AnuncioService {
    constructor(
    @InjectRepository(Anuncio)
    private AnuncioRepository: Repository<Anuncio>,
    ) {}

    async create({ AnuncioQntViews, AnuncioQntLinks, CodImovel, AnuncioDestaque }: Request): Promise<Anuncio> {
    const anuncio = await this.AnuncioRepository.create({
        AnuncioQntViews,
        AnuncioQntLinks,
        CodImovel,
        AnuncioDestaque
    });

    await this.AnuncioRepository.save(anuncio);

    return anuncio;
    }

    async findAll(): Promise<Anuncio[]> {
    const anuncio = await this.AnuncioRepository.find();

    return anuncio;
    }

    async delete(id: number): Promise<void>{
        await this.AnuncioRepository.delete(id);
    }

    async update(id: number, DadosAtualizar: {}): Promise<void> {
        await this.AnuncioRepository.update(id, DadosAtualizar);
    }
}