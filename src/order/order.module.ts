import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chitietdonhang as Order } from 'output/entities/Chitietdonhang';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Danhsachdiachi as Address } from 'output/entities/Danhsachdiachi';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Customer, Address])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
