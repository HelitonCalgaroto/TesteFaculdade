import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    idArea: number;

    @Column()
    CodImovelCaracteristica: number;

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
