import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThucuongDonhang as Bill } from 'output/entities/ThucuongDonhang';
import { Thucuong as Product } from 'output/entities/Thucuong';
import { Chitietdonhang as Order } from 'output/entities/Chitietdonhang';

@Module({
  imports: [TypeOrmModule.forFeature([Bill, Product, Order])],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}
