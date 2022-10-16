import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoImovelController } from './tipoimovel.controller';
import { TipoImovel } from './tipoimovel.entity';
import { TipoImovelService } from './tipoimovel.service';

@Module({
    imports: [TypeOrmModule.forFeature([TipoImovel])],
    controllers: [TipoImovelController],
    providers: [TipoImovelService]
})
export class TipoImovelModule {}