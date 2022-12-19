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

  async findOne(email: string) {
    const customer =  this.customerRepository.findOneBy({ email: email });

    return customer;
  }

  async update(email: string, updateCustomerDto: UpdateCustomerDto) {
    try {
      const updateCustomer = await this.customerRepository.findOneByOrFail({ email });
      console.log(updateCustomer)

      return await this.customerRepository.save({
        ...updateCustomer,
      });
    } catch (err) {
      throw err;
    }
  }

  async remove(email: string) {
    try {
      //Delete apartment
      const findOne = await this.customerRepository.findOneOrFail({
        where: { email },
      });
      return await this.customerRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
