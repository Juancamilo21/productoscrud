import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false, unique: true})
  name_product: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  description: string;

  @Column({ type: 'float', nullable: false })
  price: number;
}
