import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ImovelCaracteristica {
    @PrimaryGeneratedColumn()
    idImovelCaracteristica: number;

    @Column()
    ImovelCaracteristicaCondominio: boolean;

    @Column()
    ImovelCaracteristicaValorCondominio: number;

    @Column()
    ImovelCaracteristicaQtdQuartos: number;

    @Column()
    ImovelCaracteristicaCozinha: number;

    @Column()
    ImovelCaracteristicaLavanderia: number;

    @Column()
    ImovelCaracteristicaSala: number;

    @Column()
    ImovelCaracteristicaPiscina: number;

    @Column()
    ImovelCaracteristicaVagaGaragem: number;
}