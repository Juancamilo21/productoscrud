import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductData } from './data-object/product.data';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductServise {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: ProductRepository,
  ) {}

  async findAll(): Promise<ProductEntity[]> {
    const listProduct = await this.productRepository.find();
    return listProduct;
  }

  async findProductById(id: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({ where: { id: id } });
    return product;
  }

  async addProduct(productData: ProductData): Promise<any> {
    const product = this.productRepository.insert(productData);
    return product;
  }

  async updateProduct(id: number, productData: ProductData) {
    await this.productRepository.update(id, productData);
  }

  async deleteProduct(id: number): Promise<any> {
    const product = await this.findProductById(id);
    return await this.productRepository.delete(product);
  }
}
