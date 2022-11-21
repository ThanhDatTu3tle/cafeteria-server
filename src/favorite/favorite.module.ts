import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thucuongyeuthich as Favorite } from 'output/entities/Thucuongyeuthich';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Thucuong as Product } from 'output/entities/Thucuong';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite, Customer, Product])],
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule {}
