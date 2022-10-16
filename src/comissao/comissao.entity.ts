import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Comissao {
    @PrimaryGeneratedColumn()
    idComissao: number;

    @Column()
    CodImovel: number;

    @Column()
    CodPessoa: number;

    @Column()
    TransacaoComissaoPlataforma: number;
}
