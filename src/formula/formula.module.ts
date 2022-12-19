import { Module } from '@nestjs/common';
import { FormulaService } from './formula.service';
import { FormulaController } from './formula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThucuongNguyenlieu as Formula } from 'output/entities/ThucuongNguyenlieu';
import { Thucuong as Product } from 'output/entities/Thucuong';
import { Nguyenlieu as Ingredient } from 'output/entities/Nguyenlieu';

@Module({
  imports: [TypeOrmModule.forFeature([Formula, Product, Ingredient])],
  controllers: [FormulaController],
  providers: [FormulaService]
})
export class FormulaModule {}
