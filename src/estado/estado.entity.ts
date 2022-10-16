import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estado {
    @PrimaryGeneratedColumn()
    idEstado: number;

    @Column()
    EstadoDescricao: string;
}
