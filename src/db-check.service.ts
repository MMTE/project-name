import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DbCheckService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  async onModuleInit() {
    try {
      await this.dataSource.query('SELECT 1');
      console.log('✅ Connected to PostgreSQL successfully');
    } catch (err) {
      console.error('❌ Failed to connect to PostgreSQL', err);
    }
  }
}
