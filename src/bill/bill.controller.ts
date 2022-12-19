import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { BillService } from './bill.service';
import { Bill } from './entities/bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Bill - Bảng ThucuongHoadon')
@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post()
  @ApiCreatedResponse({ type: Bill })
  @ApiBadRequestResponse()
  async create(@Body() createBillDto: CreateBillDto, @Res() res: Response) {
    try {
      const newFormula = await this.billService.create(
        createBillDto,
      );
      res.status(201).json({ success: true, body: newFormula });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.billService.getAll();
  }

  @Get(':maMonAn/:maChiTietDonHang')
  async findProductAndIngredient(
    @Param('maMonAn') maMonAn: string,
    @Param('maChiTietDonHang') maChiTietDonHang: string,
  ) {
    return this.billService.findProductAndIngredient(maMonAn, maChiTietDonHang);
  }

  // @Patch(':maMonAn:maChiTietDonHang')
  // async update(
  //   @Param('maMonAn') maMonAn: string, 
  //   @Param('maChiTietDonHang') maChiTietDonHang: string, 
  //   @Body() updateBillDto: UpdateBillDto,
  //   @Res() res: Response,
  // ) {
  //   if (!updateBillDto) {
  //     res
  //       .status(400)
  //       .json({ success: false, message: 'Gãy!!!' });
  //   }
  //   try {
  //     const updateBill = await this.billService.update(
  //       maMonAn, 
  //       maChiTietDonHang,
  //       updateBillDto,
  //     );
  //     res.status(200).json({ success: true, body: updateBill });
  //   } catch (err) {
  //     res.status(400).json({ success: false, message: err });
  //   }
  // }

  // @Delete(':maMonAn:maChiTietDonHang')
  // async remove(
  //   @Param('maMonAn') maMonAn: string, 
  //   @Param('maChiTietDonHang') maChiTietDonHang: string, 
  //   @Res() res: Response
  // ) {
  //   if (!maMonAn && !maChiTietDonHang) {
  //     res.status(404).json({ success: false, message: 'Gãy!!!' });
  //   }
  //   try {
  //     const deleteOrder = await this.billService.remove(maMonAn, maChiTietDonHang);
  //     res.status(200).json({ success: true, body: deleteOrder });
  //   } catch (err) {
  //     res.status(400).json({ success: false, message: err });
  //   }
  // }
}
