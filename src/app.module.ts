import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisesModule } from './paises/paises.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { RegionesModule } from './regiones/regiones.module';
import { PoblacionesModule } from './poblaciones/poblaciones.module';
import { VillasModule } from './villas/villas.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { PermisosModule } from './permisos/permisos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PaisesModule,
    CiudadModule,
    RegionesModule,
    PoblacionesModule,
    VillasModule,
    ProfileModule,
    UserModule,
    PermisosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
