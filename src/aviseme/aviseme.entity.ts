import { Imovel } from 'src/imovel/imovel.entity';
import { Caracteristica } from 'src/imovelcaracteristica/imovelcaracteristica.entity';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class AviseMe {
    @PrimaryGeneratedColumn()
    idAviseMe: number;

    @ManyToOne(() => Pessoa, pessoa=> pessoa.idPessoa)
    @JoinColumn()
    CodPessoa: Pessoa;

    @ManyToMany(() => Caracteristica, imovelCaracteristica=> imovelCaracteristica.idCaracteristica)
    @JoinColumn()
    CodImovelCaracteristica: Caracteristica;

    @ManyToMany(() => Imovel, imovel=> imovel.idImovel)
    @JoinColumn()
    CodImovel: Imovel;

    @Column()
    AviseMeEncontrado: boolean;
}
