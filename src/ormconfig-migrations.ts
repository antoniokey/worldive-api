/* eslint-disable import/first */
if (process.env.DB_URL === '') {
  delete process.env.DB_URL;
}

import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

import dbConfig from '@src/config/db';

const dataSource = new DataSource({
  ...(dbConfig as DataSourceOptions),
  entities: [path.resolve(__dirname, '**/*.entity.{ts,js}')],
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
});

export default dataSource;
/* eslint-enable import/first */
