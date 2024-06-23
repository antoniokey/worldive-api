/* eslint-disable import/first */
if (process.env.DB_URL === '') {
  delete process.env.DB_URL;
}

// eslint-disable-next-line import/no-import-module-exports
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// eslint-disable-next-line import/no-import-module-exports
import db from './config/db';

const options: TypeOrmModuleOptions = {
  ...db,
  migrations: ['dist/migrations/**/*.js'],
};

module.exports = options;
/* eslint-enable import/first */
