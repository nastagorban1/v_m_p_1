import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Category } from '../categories/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  // Отримати всі продукти
  async findAll(): Promise<Product[]> {
    return this.productRepo.find({ relations: ['category'] });
  }

  // Отримати один продукт
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  // Створити продукт
  async create(data: {
    name: string;
    description?: string;
    price: number;
    stock?: number;
    categoryId?: number;
  }): Promise<Product> {
    // створюємо один об’єкт
    const product = this.productRepo.create({
      name: data.name,
      description: data.description ?? null,
      price: data.price,
      stock: data.stock ?? 0,
      isActive: true,
      category: data.categoryId ? { id: data.categoryId } : null,
    } as unknown as Partial<Product>); // <-- без any, без DeepPartial[]

    // зберігаємо його в базу
    return this.productRepo.save(product);
  }

  // Оновити продукт
  async update(
    id: number,
    data: Partial<{
      name: string;
      description: string;
      price: number;
      stock: number;
      isActive: boolean;
      categoryId: number;
    }>,
  ): Promise<Product> {
    const product = await this.findOne(id);

    if (data.name !== undefined) product.name = data.name;
    if (data.description !== undefined) product.description = data.description;
    if (data.price !== undefined) product.price = data.price;
    if (data.stock !== undefined) product.stock = data.stock;
    if (data.isActive !== undefined) product.isActive = data.isActive;
    if (data.categoryId !== undefined) {
      // без any
      product.category = this.productRepo.manager.create(Category, {
        id: data.categoryId,
      });
    }

    return this.productRepo.save(product);
  }

  // Видалити продукт
  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepo.remove(product);
  }
}
