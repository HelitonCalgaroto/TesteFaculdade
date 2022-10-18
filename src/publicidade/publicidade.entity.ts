import { Pessoa } from 'src/pessoa/pessoa.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Publicidade {
    @PrimaryGeneratedColumn()
    idPublicidade: number;

    @OneToOne(() => Pessoa, pessoa=> pessoa.idPessoa)
    @JoinColumn()
    CodPessoa: Pessoa;

    @Column()
    PublicidadeTempo: number;

    @Column()
    PublicidadeDestaque: boolean;
    
    @Column()
    PublicidadeURL: string;
}
