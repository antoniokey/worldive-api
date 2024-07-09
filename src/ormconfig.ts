import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import db from './config/db';

export const options: TypeOrmModuleOptions = {
  ...db,
  migrations: ['dist/migrations/**/*.js'],
};
