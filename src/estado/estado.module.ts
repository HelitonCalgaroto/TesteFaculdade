import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoController } from './estado.controller';
import { Estado } from './estado.entity';
import { EstadoService } from './estado.service';

@Module({
    imports: [TypeOrmModule.forFeature([Estado])],
    controllers: [EstadoController],
    providers: [EstadoService]
})
export class EstadoModule {}