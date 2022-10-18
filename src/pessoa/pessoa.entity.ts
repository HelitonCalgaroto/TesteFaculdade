import { Contato } from 'src/contato/contato.entity';
import { Endereco } from 'src/endereco/endereco.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    idPessoa: number;

    @Column()
    PessoaNome: string;

    @OneToOne(() => Endereco, endereco=> endereco.idEndereco)
    @JoinColumn()
    CodEndereco: Endereco;

    @OneToOne(() => Contato, contato=> contato.idContato)
    @JoinColumn()
    CodContato: Contato;
}
