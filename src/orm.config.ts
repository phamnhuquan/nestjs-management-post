import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'mana_post',
    synchronize: true,  //(companies (id, name, city, location))
    entities: ['dist/**/*.entity{.ts,.js}'],
};