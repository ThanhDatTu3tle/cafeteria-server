import { ApiProperty } from '@nestjs/swagger';
// import { Danhmuc } from 'output/entities/Danhmuc';

export class CreateProductDto {
  
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  maDanhMuc?: string;
  @ApiProperty()
  tenThucUong: string;
  @ApiProperty()
  hinhAnhThucUong: string;
  @ApiProperty()
  moTaChiTiet: string;
  @ApiProperty()
  giaTien: number;
  @ApiProperty()
  yeuThich: boolean;
}
