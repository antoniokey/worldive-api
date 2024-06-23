import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const url = process.env.DB_URL;

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'worldive',
  entities: [path.resolve(__dirname, '..', '**/*.entity.{ts,js}')],
  synchronize: true,
};

export default options;
