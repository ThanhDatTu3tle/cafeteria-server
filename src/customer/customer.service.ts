import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {

    // create new categories
    const newCustomer = this.customerRepository.create();
    // newCustomer.maKhachHang = createCustomerDto.maKhachHang;
    newCustomer.email = createCustomerDto.email;
    newCustomer.hoTen = createCustomerDto.hoTen;
    newCustomer.soDienThoai = createCustomerDto.soDienThoai;
    newCustomer.matKhau = createCustomerDto.matKhau;
    newCustomer.hinhAnh = 'avatar';

    await this.customerRepository.save(newCustomer);
  }

  async getAll() {
    return this.customerRepository.find();
  }

  // findAll() {
  //   return `This action returns all categories`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
