import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
// import { DataSource } from "typeorm"

const config: SqlServerConnectionOptions = ({
  type: 'mssql',
  host: 'localhost',
  port: 1433, 
  username: 'sa',
  password: 'dat27032001',
  database: 'BanThucUong',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: ['dist/output/entities/*js'], 
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  } 
});

export default config;
