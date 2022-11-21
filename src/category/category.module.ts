import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Danhmuc as Category } from '../../output/entities/Danhmuc';
import { Thucuong as Product } from 'output/entities/Thucuong';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
