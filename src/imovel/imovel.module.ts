import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImovelController } from './imovel.controller';
import { Imovel } from './imovel.entity';
import { ImovelService } from './imovel.service';

@Module({
    imports: [TypeOrmModule.forFeature([Imovel])],
    controllers: [ImovelController],
    providers: [ImovelService]
})
export class ImovelModule {}