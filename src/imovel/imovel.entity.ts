import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Imovel {
    @PrimaryGeneratedColumn()
    idImovel: number;

    @Column()
    CodEndereco: number;

    @Column()
    CodTipoImovel: number;

    @Column()
    CodTipoServico: number;

    @Column()
    CodPessoa: number;

    @Column()
    ImovelValor: number;

    @Column()
    CodImovelCaracteristica: number;
}
