import { Imovel } from 'src/imovel/imovel.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Anuncio {
    @PrimaryGeneratedColumn()
    idAnuncio: number;

    @Column()
    AnuncioQntViews: number;

    @Column()
    AnuncioQntLinks: number;

    @OneToOne(() => Imovel, imovel=> imovel.idImovel)
    @JoinColumn()
    CodImovel: Imovel;

    @Column()
    AnuncioDestaque: boolean;
}
