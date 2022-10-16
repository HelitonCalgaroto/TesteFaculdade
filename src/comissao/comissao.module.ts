import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComissaoController } from './comissao.controller';
import { Comissao } from './comissao.entity';
import { ComissaoService } from './comissao.service';

@Module({
    imports: [TypeOrmModule.forFeature([Comissao])],
    controllers: [ComissaoController],
    providers: [ComissaoService]
})
export class ComissaoModule {}