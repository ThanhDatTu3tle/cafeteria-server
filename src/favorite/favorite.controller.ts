import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Favorite } from './entities/favorite.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
// import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { REPLCommand } from 'repl';

@ApiTags('Favorite')
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
  async findAll() {
    return this.favoriteService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.favoriteService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
  //   return this.favoriteService.update(+id, updateFavoriteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.favoriteService.remove(+id);
  // }
}
