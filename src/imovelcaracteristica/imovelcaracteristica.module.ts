import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImovelCaracteristicaController } from './imovelcaracteristica.controller';
import { ImovelCaracteristica } from './imovelcaracteristica.entity';
import { ImovelCaracteristicaService } from './imovelcaracteristica.service';

@Module({
    imports: [TypeOrmModule.forFeature([ImovelCaracteristica])],
    controllers: [ImovelCaracteristicaController],
    providers: [ImovelCaracteristicaService]
})
export class ImovelCaracteristicaModule {}