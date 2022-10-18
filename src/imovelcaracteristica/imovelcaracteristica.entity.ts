import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Caracteristica {
    @PrimaryGeneratedColumn()
    idCaracteristica: number;

    @Column()
    CaracteristicaCondominio: boolean;

    @Column()
    CaracteristicaValorCondominio: number;

    @Column()
    CaracteristicaQtdQuartos: number;

    @Column()
    CaracteristicaCozinha: number;

    @Column()
    CaracteristicaLavanderia: number;

    @Column()
    CaracteristicaSala: number;

    @Column()
    CaracteristicaPiscina: number;

    @Column()
    CaracteristicaVagaGaragem: number;
}