import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaController } from './area.controller';
import { Area } from './area.entity';
import { AreaService } from './area.service';

@Module({
    imports: [TypeOrmModule.forFeature([Area])],
    controllers: [AreaController],
    providers: [AreaService]
})
export class AreaModule {}