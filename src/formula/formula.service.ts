import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormulaDto } from './dto/create-formula.dto';
import { UpdateFormulaDto } from './dto/update-formula.dto';
import { FormulaRelations as relations  } from 'src/relations/relations';
import { ThucuongNguyenlieu as Formula } from 'output/entities/ThucuongNguyenlieu';
import { Thucuong as Product } from 'output/entities/Thucuong';
import { Nguyenlieu as Ingredient } from 'output/entities/Nguyenlieu';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class FormulaService {

  constructor(
    @InjectRepository(Formula)
    private formulaRepository: Repository<Formula>,
    
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createFormulaDto: CreateFormulaDto): Promise<Formula> {  
    try {
      // Foreign key maThucUong: product
      const productBody = createFormulaDto.maThucUong;
      const products = await this.productRepository.findOneByOrFail({
        maThucUong: productBody
      });

      // Foreign key Nguyenlieu: ingredient
      const ingredientBody = createFormulaDto.maNguyenLieu;
      const ingredients = await this.ingredientRepository.findOneByOrFail({
        maNguyenLieu: ingredientBody
      });

      // create new order
      const newFormula = this.formulaRepository.create();
      newFormula.maThucUong2 = products; //*** */
      newFormula.maNguyenLieu2 = ingredients; //*** */
      newFormula.soLuong = createFormulaDto.soLuong;

      await this.formulaRepository.save(newFormula);
      // console.log(this.productRepository)

      const findAndReturn = await this.formulaRepository.findOneOrFail({
        relations,
        where: { 
          maThucUong: newFormula.maThucUong,
          maNguyenLieu: newFormula.maNguyenLieu,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Formula[]> {

    const getAll = await this.formulaRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findProductAndIngredient(maThucUong: string, maNguyenLieu: string) {
    const productIngredient = await this.formulaRepository.find({ 
      relations,
    })
    const formula = await this.formulaRepository.find();

    return productIngredient;
  }

  async update(maThucUong: string, maNguyenLieu: string, updateFormulaDto: UpdateFormulaDto): Promise<Formula> {
    try {
      const updateFormula = await this.formulaRepository.findOneByOrFail({ maThucUong, maNguyenLieu })

      await this.formulaRepository.save({
        ...updateFormula,
        // gioDat: updateOrderDto.gioDat,
        // ngayDat: updateOrderDto.ngayDat,
        // thanhTien: updateOrderDto.thanhTien,
        // maGiamGia: updateOrderDto.maGiamGia,
        // trangThai: updateOrderDto.trangThai,
      });

      const findAndReturn = await this.formulaRepository.findOneOrFail({
        relations,
        where: { 
          maThucUong: updateFormula.maThucUong,
          maNguyenLieu: updateFormula.maNguyenLieu,
        },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maThucUong: string, maNguyenLieu: string) {
    try {
      const findOne = await this.formulaRepository.findOneOrFail({
        where: { maThucUong, maNguyenLieu },
      });
      return await this.formulaRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
