import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Nguyenlieu as Ingredient } from 'output/entities/Nguyenlieu';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class IngredientService {

  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {

    // create new categories
    const newIngredient = this.ingredientRepository.create();
    newIngredient.maNguyenLieu = createIngredientDto.maNguyenLieu;
    newIngredient.tenNguyenLieu = createIngredientDto.tenNguyenLieu;
    newIngredient.soLuong = createIngredientDto.soLuong;

    await this.ingredientRepository.save(newIngredient);
  }

  async getAll() {
    return this.ingredientRepository.find();
  }

  async findOne(maNguyenLieu: string): Promise<Ingredient> {
    const ingredient =  this.ingredientRepository.findOneBy({ maNguyenLieu: maNguyenLieu });

    return ingredient;
  }

  async update(maNguyenLieu: string, updateIngredientDto: UpdateIngredientDto) {
    try {
      const updateIngredient = await this.ingredientRepository.findOneByOrFail({ maNguyenLieu });

      return await this.ingredientRepository.save({
        ...updateIngredient,
      });
    } catch (err) {
      throw err;
    }
  }

  async remove(maNguyenLieu: string) {
    try {
      const findOne = await this.ingredientRepository.findOneOrFail({
        where: { maNguyenLieu },
      });
      return await this.ingredientRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
