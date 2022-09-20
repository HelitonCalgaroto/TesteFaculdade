import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  idPessoa: number;

  @Column()
  pessoaNome: string;

  @Column()
  CodEndereco: number;;

  @Column({ default: true })
  CodContato: number;
}