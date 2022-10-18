import { Imovel } from 'src/imovel/imovel.entity';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Comissao {
    @PrimaryGeneratedColumn()
    idComissao: number;

    @ManyToMany(() => Imovel, imovel=> imovel.idImovel)
    @JoinColumn()
    CodImovel: Imovel;

    @ManyToOne(() => Pessoa, pessoa=> pessoa.idPessoa)
    @JoinColumn()
    CodPessoa: Pessoa;

    @Column()
    TransacaoComissaoPlataforma: number;
}
