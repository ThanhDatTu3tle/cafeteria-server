import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Customer - Bảng Khachhang')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiCreatedResponse({ type: Customer })
  @ApiBadRequestResponse()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  async getAll() {
    return this.customerService.getAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    return this.customerService.findOne(email);
  }

  @Patch(':email')
  async update(@Param('email') email: string, @Body() updateCustomerDto: UpdateCustomerDto, @Res() res: Response,) {
    if (!updateCustomerDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateCustomer = await this.customerService.update(
        email, 
        updateCustomerDto,
      );
      res.status(200).json({ success: true, body: updateCustomer });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':email')
  async remove(@Param('email') email: string, @Res() res: Response,) {
    if (!email) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteCustomer = await this.customerService.remove(email);
      res.status(200).json({ success: true, body: deleteCustomer });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
