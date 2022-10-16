import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoServico {
    @PrimaryGeneratedColumn()
    idTipoServico: number;

    @Column()
    TipoServicoNome: string;
}
