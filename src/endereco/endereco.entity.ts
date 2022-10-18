import { Bairro } from 'src/bairro/bairro.entity';
import { Cidade } from 'src/cidade/cidade.entity';
import { Estado } from 'src/estado/estado.entity';
import { Rua } from 'src/rua/rua.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Endereco {
    @PrimaryGeneratedColumn()
    idEndereco: Endereco;

    @ManyToOne(() => Bairro, bairro=> bairro.idBairro)
    @JoinColumn()
    CodBairro: Bairro;

    @ManyToOne(() => Estado, estado=> estado.idEstado)
    @JoinColumn()
    CodEstado: Estado;

    @ManyToOne(() => Cidade, cidade=> cidade.idCidade)
    @JoinColumn()
    CodCidade: Cidade;

    @ManyToOne(() => Rua, rua=> rua.idRua)
    @JoinColumn()
    CodRua: Rua;

    @Column()
    EnderecoNumero: number;
}
