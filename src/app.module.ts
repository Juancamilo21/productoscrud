import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductEntity } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { ProductServise } from './product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'controlproductos',
      entities: [ ProductEntity ],
      synchronize: true,
    }),
    ProductModule
  ]
})
export class AppModule {}
