import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Imovel } from 'src/imovel/imovel.entity';
import { Repository } from 'typeorm';
import { Anuncio } from './anuncio.entity';

interface Request {
    anuncioQntViews: number;
    anuncioQntLinks: number;
    codImovel: Imovel;
    anuncioDestaque: boolean;
}
interface updateDto {
    anuncioQntViews: number;
    anuncioQntLinks: number;
    codImovel: Imovel;
    anuncioDestaque: boolean;
}
@Injectable()
export class AnuncioService {
    constructor(
    @InjectRepository(Anuncio)
    private anuncioRepository: Repository<Anuncio>,
    ) {}

    async create({ anuncioQntViews, anuncioQntLinks, codImovel, anuncioDestaque }: Request): Promise<Anuncio> {
        const anuncio = await this.anuncioRepository.create({
              anuncioQntViews,
              anuncioQntLinks,
              codImovel,
              anuncioDestaque
        });

        await this.anuncioRepository.save(anuncio);

        return anuncio;
    }

    async findAll(): Promise<Anuncio[]> {
        const anuncio = await this.anuncioRepository.find();

        return anuncio;
    }

    async delete(id: number): Promise<void>{
        await this.anuncioRepository.delete(id);
    }

    async update(id: number, {anuncioQntViews, 
                              anuncioQntLinks, 
                              codImovel, 
                              anuncioDestaque}: updateDto): Promise<void> {
        await this.anuncioRepository.update(id, {anuncioQntViews, 
                                                 anuncioQntLinks, 
                                                 codImovel, 
                                                 anuncioDestaque});
    }
}