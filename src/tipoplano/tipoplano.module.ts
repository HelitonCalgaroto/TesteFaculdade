import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPlanoController } from './tipoplano.controller';
import { TipoPlano } from './tipoplano.entity';
import { TipoPlanoService } from './tipoplano.service';

@Module({
    imports: [TypeOrmModule.forFeature([TipoPlano])],
    controllers: [TipoPlanoController],
    providers: [TipoPlanoService]
})
export class TipoPlanoModule {}