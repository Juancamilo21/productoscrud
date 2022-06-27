import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductEntity } from './product.entity';
import { ProductServise } from './product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity])
    ],
    providers: [ProductServise],
    controllers: [ProductController]
})
export class ProductModule {}
