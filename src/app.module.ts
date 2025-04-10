import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbCheckService } from './db-check.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DbCheckService],
})
export class AppModule {}
