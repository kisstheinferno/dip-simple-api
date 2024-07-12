import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'postgres',
  logging: true,
  synchronize: false,
  ssl: process.env.ENVIRONMENT === 'production' ? true : false,
  extra:
    process.env.ENVIRONMENT === 'production'
      ? {
          ssl: {
            rejectUnauthorized:
              process.env.ENVIRONMENT === 'production' ? false : true,
          },
        }
      : null,
  entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
});

export default dataSource;
