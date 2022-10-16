import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Anuncio {
    @PrimaryGeneratedColumn()
    idAnuncio: number;

    @Column()
    AnuncioQntViews: number;

    @Column()
    AnuncioQntLinks: number;

    @Column()
    CodImovel: number;

    @Column()
    AnuncioDestaque: boolean;
}
