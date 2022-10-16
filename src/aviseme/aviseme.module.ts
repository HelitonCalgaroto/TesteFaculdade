import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AviseMeController } from './aviseme.controller';
import { AviseMe } from './aviseme.entity';
import { AviseMeService } from './aviseme.service';

@Module({
    imports: [TypeOrmModule.forFeature([AviseMe])],
    controllers: [AviseMeController],
    providers: [AviseMeService]
})
export class AviseMeModule {}