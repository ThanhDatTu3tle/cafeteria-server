import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { BillRelations as relations } from '../../src/relations/relations';
import { ThucuongDonhang as Bill } from 'output/entities/ThucuongDonhang';
import { Thucuong as Product } from 'output/entities/Thucuong';
import { Chitietdonhang as Order } from 'output/entities/Chitietdonhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class BillService {

  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
    
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(createBillDto: CreateBillDto): Promise<Bill> {  
    try {
      // Foreign key Monan: product
      const productBody = createBillDto.maThucUong;
      const products = await this.productRepository.findOneByOrFail({
        maThucUong: productBody
      });

      // Foreign key Nguyenlieu: ingredient
      const orderBody = createBillDto.maChiTietDonHang;
      const orders = await this.orderRepository.findOneByOrFail({
        maChiTietDonHang: orderBody
      });

      // create new order
      const newBill = this.billRepository.create(createBillDto);
      newBill.maThucUong = ''; //*** */
      newBill.maChiTietDonHang = ''; //*** */
      newBill.soLuong = createBillDto.soLuong;
      newBill.thanhTien = createBillDto.thanhTien;

      await this.billRepository.save(newBill);
      // console.log(this.productRepository)

      const findAndReturn = await this.billRepository.findOneOrFail({
        relations,
        where: { 
          maThucUong: newBill.maThucUong,
          maChiTietDonHang: newBill.maChiTietDonHang,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Bill[]> {

    const getAll = await this.billRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findProductAndIngredient(maMonAn: string, maChiTietDonHang: string) {
    const productOrder = await this.billRepository.find({ 
      relations,
    })
    const bill = await this.billRepository.find();

    return productOrder;
  }

  // async update(maMonAn: string, maChiTietDonHang: string, updateBillDto: UpdateBillDto): Promise<Bill> {
  //   try {
  //     const updateBill = await this.billRepository.findOneByOrFail({ maMonAn, maChiTietDonHang })

  //     await this.billRepository.save({
  //       ...updateBill,
  //       // gioDat: updateOrderDto.gioDat,
  //       // ngayDat: updateOrderDto.ngayDat,
  //       // thanhTien: updateOrderDto.thanhTien,
  //       // maGiamGia: updateOrderDto.maGiamGia,
  //       // trangThai: updateOrderDto.trangThai,
  //     });

  //     const findAndReturn = await this.billRepository.findOneOrFail({
  //       relations,
  //       where: { 
  //         maMonAn: updateBill.maMonAn,
  //         maChiTietDonHang: updateBill.maChiTietDonHang,
  //       },
  //     });

  //     return findAndReturn;
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  // async remove(maMonAn: string, maChiTietDonHang: string) {
  //   try {
  //     const findOne = await this.billRepository.findOneOrFail({
  //       where: { maMonAn, maChiTietDonHang },
  //     });
  //     return await this.billRepository.remove(findOne);
  //   } catch (err) {
  //     throw err;
  //   }
  // }
}
