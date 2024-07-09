import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'worldive',
  entities: [path.resolve(__dirname, '..', '**/*.entity.{ts,js}')],
  synchronize: false,
};

export default options;
