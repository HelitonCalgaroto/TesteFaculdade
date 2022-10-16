import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoServicoController } from './tiposervico.controller';
import { TipoServico } from './tiposervico.entity';
import { TipoServicoService } from './tiposervico.service';

@Module({
    imports: [TypeOrmModule.forFeature([TipoServico])],
    controllers: [TipoServicoController],
    providers: [TipoServicoService]
})
export class TipoServicoModule {}