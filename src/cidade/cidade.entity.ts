import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cidade {
    @PrimaryGeneratedColumn()
    idCidade: number;

    @Column()
    CidadeDescricao: string;
}
