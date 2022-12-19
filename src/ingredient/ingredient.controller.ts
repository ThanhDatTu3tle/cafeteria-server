import { Controller, Get, Post, Body, Patch, Param, Delete ,Res } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './entities/ingredient.entity';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Ingredient - Bảng Nguyenlieu')
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  @ApiCreatedResponse({ type: Ingredient })
  @ApiBadRequestResponse()
  async create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientService.create(createIngredientDto);
  }

  @Get()
  async getAll() {
    return this.ingredientService.getAll();
  }

  @Get(':maNguyenLieu')
  async findOne(@Param('maNguyenLieu') maNguyenLieu: string) {
    return this.ingredientService.findOne(maNguyenLieu);
  }

  @Patch(':maNguyenLieu')
  async update(
    @Param('maNguyenLieu') maNguyenLieu: string, 
    @Body() updateIngredientDto: UpdateIngredientDto,
    @Res() res: Response,
  ) {
    if (!updateIngredientDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateIngredient = await this.ingredientService.update(
        maNguyenLieu, 
        updateIngredientDto,
      );
      res.status(200).json({ success: true, body: updateIngredient });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maNguyenLieu')
  async remove(@Param('maNguyenLieu') maNguyenLieu: string, @Res() res: Response,) {
    if (!maNguyenLieu) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteProduct = await this.ingredientService.remove(maNguyenLieu);
      res.status(200).json({ success: true, body: deleteProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
