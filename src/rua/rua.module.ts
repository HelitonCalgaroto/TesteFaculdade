import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuaController } from './rua.controller';
import { Rua } from './rua.entity';
import { RuaService } from './rua.service';

@Module({
    imports: [TypeOrmModule.forFeature([Rua])],
    controllers: [RuaController],
    providers: [RuaService]
})
export class RuaModule {}