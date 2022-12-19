import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRelations as relations  } from '../../src/relations/relations';
import { Danhsachdiachi as Address } from 'output/entities/Danhsachdiachi';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {  
    try {
      // Foreign key Khachhang: customer
      const customerBody = createAddressDto.email;
      const customer = await this.customerRepository.findOneBy({
        email: customerBody
      });

      // create new product
      const newAddress = this.addressRepository.create();
      newAddress.maDiaChi = createAddressDto.maDiaChi;
      newAddress.email = customer;
      newAddress.diaChi = createAddressDto.diaChi;
      newAddress.tenDiaChi = createAddressDto.tenDiaChi;

      await this.addressRepository.save(newAddress);

      const findAndReturn = await this.addressRepository.findOneOrFail({
        relations: relations,
        where: { maDiaChi: newAddress.maDiaChi },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Address[]> {

    const getAll = await this.addressRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findCustomer(email: string) {
    const customer = await this.addressRepository.find({ 
      relations,
    })
    const address = await this.addressRepository.find();
    const customerAddress = [];
    console.log(customer)

    for (let i = 0; i < customer.length; i++) {

      const emailCustomer = customer[i].email.email;

      if (emailCustomer === email) {
        customerAddress.push(customer[i])
      }
    }

    return customerAddress;
  }

  async update(maDiaChi: string, updateAddressDto: UpdateAddressDto): Promise<Address> {
    try {
      const updateAddress = await this.addressRepository.findOneByOrFail({ maDiaChi })

      await this.addressRepository.save({
        ...updateAddress,
        diaChi: updateAddressDto.diaChi,
        tenDiaChi: updateAddressDto.tenDiaChi,
      });

      const findAndReturn = await this.addressRepository.findOneOrFail({
        relations,
        where: { maDiaChi: updateAddress.maDiaChi },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maDiaChi: string) {
    try {
      const findOne = await this.addressRepository.findOneOrFail({
        where: { maDiaChi },
      });
      return await this.addressRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
