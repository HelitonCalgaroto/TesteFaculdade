import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadeController } from './cidade.controller';
import { Cidade } from './cidade.entity';
import { CidadeService } from './cidade.service';

@Module({
    imports: [TypeOrmModule.forFeature([Cidade])],
    controllers: [CidadeController],
    providers: [CidadeService]
})
export class CidadeModule {}