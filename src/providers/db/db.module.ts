import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '@configs/db';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(dbConfig)],
      useFactory: (config: ConfigType<typeof dbConfig>) => ({
        ...config,
      }),
      inject: [dbConfig.KEY],
    }),
  ],
})
export class DbModule {}
