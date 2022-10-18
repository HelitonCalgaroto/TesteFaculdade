import { Endereco } from 'src/endereco/endereco.entity';
import { Caracteristica } from 'src/imovelcaracteristica/imovelcaracteristica.entity';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import { TipoImovel } from 'src/tipoimovel/tipoimovel.entity';
import { TipoServico } from 'src/tiposervico/tiposervico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Imovel {
    @PrimaryGeneratedColumn()
    idImovel: number;

    @OneToOne(() => Endereco, endereco=> endereco.idEndereco)
    @JoinColumn()
    CodEndereco: Endereco;

    @OneToOne(() => TipoImovel, imoveltipo=> imoveltipo.idTipoImovel)
    @JoinColumn()
    CodTipoImovel: TipoImovel;

    @OneToOne(() => TipoServico, tipoServico=> tipoServico.idTipoServico)
    @JoinColumn()
    CodTipoServico: TipoServico;

    @OneToOne(() => Pessoa, pessoa=> pessoa.idPessoa)
    @JoinColumn()
    CodPessoa: Pessoa;

    @Column()
    ImovelValor: number;

    @OneToOne(() => Caracteristica, imovelcaracteristica=> imovelcaracteristica.idCaracteristica)
    @JoinColumn()
    CodImovelCaracteristica: Caracteristica;
}
