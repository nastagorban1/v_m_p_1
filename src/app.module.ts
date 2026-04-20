import { Module } from '@nestjs/common';
import { CreateTables1700000001000 } from './migrations/CreateTables1700000001000';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './categories/category.entity';
import { Product } from './products/product.entity';
import { AddIsActiveToProducts1775680618928 } from './migrations/1775680618928-AddIsActiveToProducts';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    CategoriesModule,
    ProductsModule,
    ConfigModule.forRoot({ isGlobal: true }),

    // PostgreSQL через TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST!,
      port: parseInt(process.env.POSTGRES_PORT!, 10),
      username: process.env.POSTGRES_USER!,
      password: process.env.POSTGRES_PASSWORD!,
      database: process.env.POSTGRES_DB!,
      entities: [Category, Product],
      synchronize: false,
      migrationsRun: true,
      migrations: [
        CreateTables1700000001000,
        AddIsActiveToProducts1775680618928,
      ],
    }),

    // Redis через CacheModule
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: process.env.REDIS_HOST!,
            port: parseInt(process.env.REDIS_PORT!, 10),
          },
        }),
        ttl: 60 * 1000, // кеш на 60 секунд
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
