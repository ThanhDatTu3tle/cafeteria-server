import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
// import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { FavoriteRelations as relations} from 'src/relations/relations';
import { Thucuongyeuthich as Favorite } from 'output/entities/Thucuongyeuthich';
import { Thucuong as Product } from 'output/entities/Thucuong';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class FavoriteService {

  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    try {
      // Foreign key Khachhang: customer
      const customerBody = createFavoriteDto.email;
      const customers = await this.customerRepository.findOneByOrFail({
        email: customerBody
      });

      // Foreign key Monan: product
      const productBody = createFavoriteDto.maThucUong;
      const products = await this.productRepository.findOneByOrFail({
        maThucUong: productBody
      });

      // create new order
      const newFavorite = this.favoriteRepository.create();
      newFavorite.maThucUongYeuThich = createFavoriteDto.maThucUongYeuThich;
      newFavorite.maThucUong = products;
      newFavorite.email = customers;
      
      await this.favoriteRepository.save(newFavorite);
      // console.log(this.productRepository)

      const findAndReturn = await this.favoriteRepository.findOneOrFail({
        relations,
        where: { 
          maThucUongYeuThich: newFavorite.maThucUongYeuThich,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  findAll() {
    return `This action returns all favorite`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} favorite`;
  // }

  // update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
  //   return `This action updates a #${id} favorite`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} favorite`;
  // }
}
