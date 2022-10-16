import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Endereco {
    @PrimaryGeneratedColumn()
    idEndereco: number;

    @Column()
    CodBairro: number;

    @Column()
    CodEstado: number;

    @Column()
    CodCidade: number;

    @Column()
    CodRua: number;

    @Column()
    EnderecoNumero: number;
}
