import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Order - Bảng Chitietdonhang')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiCreatedResponse({ type: Order })
  @ApiBadRequestResponse()
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @Res() res: Response,
  ) {
    try {
      const newOrder = await this.orderService.create(
        createOrderDto,
      );
      res.status(201).json({ success: true, body: newOrder });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.orderService.getAll();
  }

  @Get(':maChiTietDonHang')
  async findOne(
    @Param('maChiTietDonHang') maChiTietDonHang: string,
  ) {
    return this.orderService.findOne(maChiTietDonHang);
  }

  @Get(':email')
  async findCustomer(@Param('email') email: string) {
    return this.orderService.findCustomer(email);
  }

  @Get(':email/:maDiaChi')
  async findCustomerAndAddress(
    @Param('email') email: string,
    @Param('maDiaChi') maDiaChi: string,
  ) {
    return this.orderService.findCustomerAndAddress(email, maDiaChi);
  }

  @Patch(':maChiTietDonHang')
  async update(
    @Param('maChiTietDonHang') maChiTietDonHang: string, 
    @Body() updateOrderDto: UpdateOrderDto,
    @Res() res: Response,
  ) {
    if (!updateOrderDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateOrder = await this.orderService.update(
        maChiTietDonHang, 
        updateOrderDto,
      );
      res.status(200).json({ success: true, body: updateOrder });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maChiTietDonHang')
  async remove(@Param('maChiTietDonHang') maChiTietDonHang: string, @Res() res: Response) {
    if (!maChiTietDonHang) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteOrder = await this.orderService.remove(maChiTietDonHang);
      res.status(200).json({ success: true, body: deleteOrder });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
