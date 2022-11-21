import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thucuong as Product } from '../../output/entities/Thucuong';
import { Danhmuc as Category } from 'output/entities/Danhmuc';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
