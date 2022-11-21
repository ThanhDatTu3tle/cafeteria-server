import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
// import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackRelations as relations } from 'src/relations/relations';
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

  // findAll() {
  //   return `This action returns all products`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
