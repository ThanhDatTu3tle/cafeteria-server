import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ykienkhachhang as Feedback } from 'output/entities/Ykienkhachhang';
import { Khachhang as Customer } from 'output/entities/Khachhang';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback, Customer])],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}
