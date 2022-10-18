import { Pessoa } from 'src/pessoa/pessoa.entity';
import { TipoPlano } from 'src/tipoplano/tipoplano.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Plano {
    @PrimaryGeneratedColumn()
    idPlano: number;

    @OneToOne(() => Pessoa, pessoa=> pessoa.idPessoa)
    @JoinColumn()
    CodPessoa: Pessoa;

    @OneToOne(() => TipoPlano, tipoplano=> tipoplano.idTipoPlano)
    @JoinColumn()
    CodTipoPlano: TipoPlano;
}
