import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { AddressModule } from './address/address.module';
import { FeedbackModule } from './feedback/feedback.module';
import { OrderModule } from './order/order.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }), 
    ProductsModule, 
    CategoryModule, CustomerModule, AddressModule, FeedbackModule, OrderModule, FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
