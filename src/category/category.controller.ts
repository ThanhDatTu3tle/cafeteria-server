import { Controller, Get, Post, Body, Patch, Put, Param, Delete, ParseIntPipe, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Category - Bảng DanhMuc')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiCreatedResponse({ type: Category })
  @ApiBadRequestResponse()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async getAll() {
    return this.categoryService.getAll();
  }

  @Get(':maDanhMuc')
  findOne(@Param('maDanhMuc') maDanhMuc: string) {
    return this.categoryService.findOne(maDanhMuc);
  }

  @Patch(':maDanhMuc')
  async update(
    @Param('maDanhMuc') maDanhMuc: string, 
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Res() res: Response,
  ) {
    if (!updateCategoryDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateCategory = await this.categoryService.update(
        maDanhMuc, 
        updateCategoryDto,
      );
      res.status(200).json({ success: true, body: updateCategory });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maDanhMuc')
  async remove(@Param('maDanhMuc') maDanhMuc: string, @Res() res: Response,) {
    if (!maDanhMuc) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteProduct = await this.categoryService.remove(maDanhMuc);
      res.status(200).json({ success: true, body: deleteProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
