import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicidadeController } from './publicidade.controller';
import { Publicidade } from './publicidade.entity';
import { PublicidadeService } from './publicidade.service';

@Module({
    imports: [TypeOrmModule.forFeature([Publicidade])],
    controllers: [PublicidadeController],
    providers: [PublicidadeService]
})
export class PublicidadeModule {}