import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.findProductById(id);
  }

  @Post()
  async add(@Body() productData: ProductData) {
    return await this.productService.addProduct(productData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productData: ProductData,
  ) {
    return await this.productService.updateProduct(id, productData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteProduct(id);
  }
}
