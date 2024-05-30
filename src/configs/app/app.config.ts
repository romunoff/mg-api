import { registerAs } from '@nestjs/config';
import { APP_CONFIG_TOKEN } from '@common/constants';
import { AppConfig } from '@common/interfaces';

export const appConfig = registerAs(
  APP_CONFIG_TOKEN,
  (): AppConfig => ({
    port: +process.env.PORT || 8081,
  }),
);
