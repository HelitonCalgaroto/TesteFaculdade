import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoPlano {
    @PrimaryGeneratedColumn()
    idTipoPlano: number;

    @Column()
    PlanoNome: string;

    @Column()
    PlanoQuantidadePublicacao: number;
}
