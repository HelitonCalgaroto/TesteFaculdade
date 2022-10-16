import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoController } from './endereco.controller';
import { Endereco } from './endereco.entity';
import { EnderecoService } from './endereco.service';

@Module({
    imports: [TypeOrmModule.forFeature([Endereco])],
    controllers: [EnderecoController],
    providers: [EnderecoService]
})
export class EnderecoModule {}