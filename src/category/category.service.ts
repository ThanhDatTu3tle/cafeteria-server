import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
// import { ProductRelations as relations } from 'src/relations/relations';
import { Thucuong as Product } from '../../output/entities/Thucuong';
import { Danhmuc as Category } from '../../output/entities/Danhmuc';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {

    // create new categories
    const newCategory = this.categoryRepository.create();
    newCategory.maDanhMuc = createCategoryDto.maDanhMuc;
    newCategory.tenDanhMuc = createCategoryDto.tenDanhMuc;
    newCategory.hinhAnh = createCategoryDto.hinhAnh;

    await this.categoryRepository.save(newCategory);
  }

  async getAll() {
    return this.categoryRepository.find();
  }

  findOne(maDanhMuc: string): Promise<Category> {
    const category =  this.categoryRepository.findOneBy({ maDanhMuc: maDanhMuc });

    // console.log(category)

    return category;
  }

  async update(maDanhMuc: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updateCategory = await this.categoryRepository.findOneByOrFail({ maDanhMuc });
      console.log(updateCategory)

      return await this.categoryRepository.save({
        ...updateCategory,
      });
    } catch (err) {
      throw err;
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
