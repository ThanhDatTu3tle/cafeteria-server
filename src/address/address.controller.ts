import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
// import { UpdateAddressDto } from './dto/update-address.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Address')
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

  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
