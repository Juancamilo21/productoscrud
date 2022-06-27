import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

export class ProductRepository extends Repository<ProductEntity> {}
