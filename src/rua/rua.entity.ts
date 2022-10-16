import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rua {
    @PrimaryGeneratedColumn()
    idRua: number;

    @Column()
    RuaDescricao: string;
}
