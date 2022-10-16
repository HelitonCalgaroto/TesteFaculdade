import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoImovel {
    @PrimaryGeneratedColumn()
    idTipoImovel: number;

    @Column()
    TipoImovelDescricao: string;
}
