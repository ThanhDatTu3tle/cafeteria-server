import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Favorite } from './entities/favorite.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { REPLCommand } from 'repl';

@ApiTags('Favorite - Bảng Thucuongyeuthich')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiCreatedResponse({ type: Favorite })
  @ApiBadRequestResponse()
  async create(
    @Body() createFavoriteDto: CreateFavoriteDto,
    @Res() res: Response,
  ) {
    try {
      const newFavorite = await this.favoriteService.create(
        createFavoriteDto,
      );
      res.status(201).json({ success: true, body: newFavorite });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.favoriteService.getAll();
  }

  @Get(':email')
  async findCustomer(
    @Param('email') email: string,
  ) {
    return this.favoriteService.findCustomer(email);
  }

  @Get(':email/:maMonAn')
  async findCustomerAndProduct(
    @Param('email') email: string,
    @Param('maMonAn') maMonAn: string,
  ) {
    return this.favoriteService.findCustomerAndProduct(email, maMonAn);
  }

  @Patch(':maMonAnYeuThich')
  async update(
    @Param('maMonAnYeuThich') maMonAnYeuThich: string, 
    @Body() updateFavoriteDto: UpdateFavoriteDto,
    @Res() res: Response,
  ) {
    if (!updateFavoriteDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateOrder = await this.favoriteService.update(
        maMonAnYeuThich, 
        updateFavoriteDto,
      );
      res.status(200).json({ success: true, body: updateOrder });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maMonAnYeuThich')
  async remove(@Param('maMonAnYeuThich') maMonAnYeuThich: string, @Res() res: Response) {
    if (!maMonAnYeuThich) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteOrder = await this.favoriteService.remove(maMonAnYeuThich);
      res.status(200).json({ success: true, body: deleteOrder });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
