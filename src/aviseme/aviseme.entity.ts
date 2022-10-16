import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AviseMe {
    @PrimaryGeneratedColumn()
    idAviseMe: number;

    @Column()
    CodPessoa: number;

    @Column()
    CodImovelCaracteristica: number;

    @Column()
    CodImovel: number;

    @Column()
    AviseMeEncontrado: boolean;
}
