import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anuncio } from './anuncio/anuncio.entity';
import { AnuncioModule } from './anuncio/anuncio.module';
import { Area } from './area/area.entity';
import { AreaModule } from './area/area.module';
import { AviseMe } from './aviseme/aviseme.entity';
import { AviseMeModule } from './aviseme/aviseme.module';
import { Bairro } from './bairro/bairro.entity';
import { BairroModule } from './bairro/bairro.module';
import { Cidade } from './cidade/cidade.entity';
import { CidadeModule } from './cidade/cidade.module';
import { Comissao } from './comissao/comissao.entity';
import { ComissaoModule } from './comissao/comissao.module';
import { Contato } from './contato/contato.entity';
import { ContatoModule } from './contato/contato.module';
import { Endereco } from './endereco/endereco.entity';
import { EnderecoModule } from './endereco/endereco.module';
import { Estado } from './estado/estado.entity';
import { EstadoModule } from './estado/estado.module';
import { Imovel } from './imovel/imovel.entity';
import { ImovelModule } from './imovel/imovel.module';
import { Caracteristica } from './imovelcaracteristica/imovelcaracteristica.entity';
import { ImovelCaracteristicaModule } from './imovelcaracteristica/imovelcaracteristica.module';
import { Pessoa } from './pessoa/pessoa.entity';
import { PessoaModule } from './pessoa/pessoa.module';
import { Plano } from './plano/plano.entity';
import { PlanoModule } from './plano/plano.module';
import { Publicidade } from './publicidade/publicidade.entity';
import { PublicidadeModule } from './publicidade/publicidade.module';
import { Rua } from './rua/rua.entity';
import { RuaModule } from './rua/rua.module';
import { TipoImovel } from './tipoimovel/tipoimovel.entity';
import { TipoImovelModule } from './tipoimovel/tipoimovel.module';
import { TipoPlano } from './tipoplano/tipoplano.entity';
import { TipoPlanoModule } from './tipoplano/tipoplano.module';
import { TipoServico } from './tiposervico/tiposervico.entity';
import { TipoServicoModule } from './tiposervico/tiposervico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tomateseco',
      database: 'imobiliaria',
      entities: [ Pessoa,
                  Anuncio,
                  Area,
                  AviseMe,
                  Bairro,
                  Cidade,
                  Comissao,
                  Contato,
                  Endereco,
                  Estado,
                  Imovel,
                  Caracteristica,
                  Plano,
                  Publicidade,
                  Rua,
                  TipoImovel,
                  TipoPlano,
                  TipoServico],
      synchronize: true,
    }),
    AnuncioModule,
    AreaModule,
    AviseMeModule,
    BairroModule,
    CidadeModule,
    ComissaoModule,
    ContatoModule,
    EnderecoModule,
    EstadoModule,
    ImovelModule,
    ImovelCaracteristicaModule,
    PessoaModule,
    PlanoModule,
    PublicidadeModule,
    RuaModule,
    TipoImovelModule,
    TipoPlanoModule,
    TipoServicoModule
  ],
})
export class AppModule {
}