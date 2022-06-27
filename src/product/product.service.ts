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
    if (!listProduct.length) {
      throw new NotFoundException({ message: 'No hay productos registrados' });
    }
    return listProduct;
  }

  async findProductById(id: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({ where: { id: id } });
    if (!product) {
      throw new NotFoundException({ message: 'El producto no existe' });
    }
    return product;
  }

  async addProduct(productData: ProductData): Promise<any> {
    const product = this.productRepository.create(productData);
    await this.productRepository.save(product);
    return { mesaage: 'Se ha agregado y guardado' };
  }

  async updateProduct(id: number, productData: ProductData): Promise<any> {
    const product = await this.findProductById(id);
    productData.name
      ? (product.name = productData.name)
      : (product.name = product.name);
    productData.description
      ? (product.description = productData.description)
      : (product.description = product.description);
    productData.price
      ? (product.price = productData.price)
      : (product.price = product.price);
    await this.productRepository.save(product);
    return { message: 'Producto editado' };
  }

  async deleteProduct(id: number): Promise<any> {
    const product = await this.findProductById(id);
    await this.productRepository.delete(product);
    return { message: 'Se ha eliminado' };
  }
}
