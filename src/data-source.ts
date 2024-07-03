import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from 'astro:env/server';
import { DataSource } from 'typeorm';
import { Todo } from './entities/todo';

const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [Todo],
  synchronize: true,
  logging: false,
});

export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSource.isInitialized) {
    try {
      await dataSource.initialize();
    } catch (e) {
      console.error('Failed to initialize data source', e);
      process.exit(1);
    }
  }
  return dataSource;
};
