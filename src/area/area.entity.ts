import { Caracteristica } from 'src/imovelcaracteristica/imovelcaracteristica.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    idArea: number;

    @OneToOne(() => Caracteristica, imovelCaracteristica=> imovelCaracteristica.idCaracteristica)
    @JoinColumn()
    CodImovelCaracteristica: Caracteristica;

    @Column()
    AreaImovel: number;

    @Column()
    AreaCozinha: number;

    @Column()
    AreaQuarto: number;

    @Column()
    AreaGaragem: number;

    @Column()
    AreaLavanderia: number;

    @Column()
    AreaSala: number;

}
