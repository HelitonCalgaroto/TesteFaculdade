import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BairroController } from './bairro.controller';
import { Bairro } from './bairro.entity';
import { BairroService } from './bairro.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bairro])],
    controllers: [BairroController],
    providers: [BairroService]
})
export class BairroModule {}