import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bairro {
    @PrimaryGeneratedColumn()
    idBairro: number;

    @Column()
    BairroDescricao: string;

}
