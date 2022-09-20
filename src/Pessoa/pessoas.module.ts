import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasController } from './pessoas.controller';
import { Pessoa } from './pessoas.entity';
import { PessoasService } from './Pessoas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoasService],
  exports: [TypeOrmModule]
})
export class PessoasModule {}