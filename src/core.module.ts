import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from '@configs/app';
import { DbModule } from '@providers/db';
import { PlayerModule } from '@models/player';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }), DbModule, PlayerModule],
})
export class CoreModule {}
