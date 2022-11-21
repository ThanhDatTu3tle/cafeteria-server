import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Danhsachdiachi as Address } from 'output/entities/Danhsachdiachi';
import { Khachhang as Customer } from 'output/entities/Khachhang';

@Module({
  imports: [TypeOrmModule.forFeature([Address, Customer])],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
