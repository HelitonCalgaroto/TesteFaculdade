import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Publicidade {
    @PrimaryGeneratedColumn()
    idPublicidade: number;

    @Column()
    CodPessoa: number;

    @Column()
    PublicidadeTempo: number;

    @Column()
    PublicidadeDestaque: boolean;
    
    @Column()
    PublicidadeURL: string;
}
