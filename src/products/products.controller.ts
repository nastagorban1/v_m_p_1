import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Post()
  async create(
    @Body()
    data: {
      name: string;
      description?: string;
      price: number;
      stock?: number;
      categoryId?: number;
    },
  ): Promise<Product> {
    return this.productsService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: Partial<{
      name: string;
      description: string;
      price: number;
      stock: number;
      isActive: boolean;
      categoryId: number;
    }>,
  ): Promise<Product> {
    return this.productsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(+id);
  }
}
