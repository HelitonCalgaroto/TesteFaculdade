import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contato {
    @PrimaryGeneratedColumn()
    idContato: number;

    @Column()
    ContatoTelefone: string;

    @Column()
    ContatoEmail: string;

}
