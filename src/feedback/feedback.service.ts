import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackRelations as relations } from '../../src/relations/relations';
import { Ykienkhachhang as Feedback } from 'output/entities/Ykienkhachhang';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {  
    try {
      // Foreign key Khachhang: customer
      const customerBody = createFeedbackDto.email;
      const customer = await this.customerRepository.findOneBy({
        email: customerBody
      });

      // create new product
      const newFeedback = this.feedbackRepository.create();
      newFeedback.maYKien = createFeedbackDto.maYKien;
      newFeedback.email = customer;
      newFeedback.noiDung = createFeedbackDto.noiDung;
      newFeedback.danhGia = createFeedbackDto.danhGia;

      await this.feedbackRepository.save(newFeedback);

      const findAndReturn = await this.feedbackRepository.findOneOrFail({
        relations: relations,
        where: { maYKien: newFeedback.maYKien },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Feedback[]> {

    const getAll = await this.feedbackRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findCustomer(email: string) {
    const customer = await this.feedbackRepository.find({ 
      relations,
    })
    const address = await this.feedbackRepository.find();

    return customer;
  }

  async update(maYKien: string, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    try {
      const updateFeedback = await this.feedbackRepository.findOneByOrFail({ maYKien })

      await this.feedbackRepository.save({
        ...updateFeedback,
        noiDung: updateFeedbackDto.noiDung,
        danhGia: updateFeedbackDto.danhGia,
      });

      const findAndReturn = await this.feedbackRepository.findOneOrFail({
        relations,
        where: { maYKien: updateFeedback.maYKien },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maYKien: string) {
    try {
      const findOne = await this.feedbackRepository.findOneOrFail({
        where: { maYKien },
      });
      return await this.feedbackRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
