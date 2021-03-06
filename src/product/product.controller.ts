import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductData } from './data-object/product.data';
import { ProductServise } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductServise) {}

  @Get()
  async getAll() {
    return await this.productService.findAll();
  }

  @Get(':id')
  async getProductById(@Param() param) {
    return await this.productService.findProductById(param.id);
  }

  @Post()
  async add(@Body() productData: ProductData) {
    return await this.productService.addProduct(productData);
  }

  @Put(':id')
  async update(@Param() param, @Body() productData: ProductData) {
    return await this.productService.updateProduct(param.id, productData);
  }

  @Delete(':id')
  async delete(@Param() param) {
    return await this.productService.deleteProduct(param.id);
  }
}
