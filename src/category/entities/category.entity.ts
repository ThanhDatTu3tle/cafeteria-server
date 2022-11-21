import { ApiProperty } from '@nestjs/swagger';

export class Category {

  @ApiProperty()
  maDanhMuc: string;
  @ApiProperty()
  tenDanhMuc: string;
  @ApiProperty()
  hinhAnh: string;
}
