import { Imovel } from 'src/imovel/imovel.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Anuncio {
    @PrimaryGeneratedColumn()
    idAnuncio: number;

    @Column()
    anuncioQntViews: number;

    @Column()
    anuncioQntLinks: number;

    @OneToOne(() => Imovel, imovel=> imovel.idImovel)
    @JoinColumn()
    codImovel: Imovel;

    @Column()
    anuncioDestaque: boolean;
}
