import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './Pessoa/pessoas.entity';
import { PessoasModule } from './Pessoa/pessoas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2531',
      database: 'imobiliaria',
      entities: [Pessoa],
      synchronize: true,
    }),
    PessoasModule,
  ],
})
export class AppModule {
}