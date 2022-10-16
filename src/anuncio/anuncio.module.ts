import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnuncioController } from './anuncio.controller';
import { Anuncio } from './anuncio.entity';
import { AnuncioService } from './anuncio.service';

@Module({
    imports: [TypeOrmModule.forFeature([Anuncio])],
    controllers: [AnuncioController],
    providers: [AnuncioService]
})
export class AnuncioModule {}