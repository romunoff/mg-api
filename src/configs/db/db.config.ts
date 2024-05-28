import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_CONFIG_TOKEN } from '@common/constants';

export const dbConfig = registerAs(
  DB_CONFIG_TOKEN,
  (): TypeOrmModuleOptions => ({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT || 5433,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    autoLoadEntities: true,
  }),
);
