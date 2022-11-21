import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  maDanhMuc: string;
  @ApiProperty()
  tenThucUong: string;
  @ApiProperty()
  moTaChiTiet: string;
  @ApiProperty()
  hinhAnhThucUong: string;
  @ApiProperty()
  giaTien: number;
  @ApiProperty()
  yeuThich: boolean;
}
