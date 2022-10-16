import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plano {
    @PrimaryGeneratedColumn()
    idPlano: number;

    @Column()
    CodPessoa: number;

    @Column()
    CodTipoPlano: number;
}
