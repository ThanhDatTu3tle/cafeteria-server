import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Address - Bảng Danhsachdiachi')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiCreatedResponse({ type: Address })
  @ApiBadRequestResponse()
  async create(
    @Body() createProductDto: CreateAddressDto,
    @Res() res: Response,
  ) {
    try {
      const newAddress = await this.addressService.create(
        createProductDto,
      );
      res.status(201).json({ success: true, body: newAddress });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.addressService.getAll();
  }

  @Get(':email')
  async findCustomer(@Param('email') email: string) {
    return this.addressService.findCustomer(email);
  }

  @Patch(':maDiaChi')
  async update(@Param('maDiaChi') maDiaChi: string, @Body() updateAddressDto: UpdateAddressDto, @Res() res: Response,) {
    if (!updateAddressDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateCustomer = await this.addressService.update(
        maDiaChi, 
        updateAddressDto,
      );
      res.status(200).json({ success: true, body: updateCustomer });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maDiaChi')
  async remove(@Param('maDiaChi') maDiaChi: string, @Res() res: Response,) {
    if (!maDiaChi) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteAddress = await this.addressService.remove(maDiaChi);
      res.status(200).json({ success: true, body: deleteAddress });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
