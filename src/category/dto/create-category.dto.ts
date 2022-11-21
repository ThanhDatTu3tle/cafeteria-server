import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {

  @ApiProperty()
  maDanhMuc: string;
  @ApiProperty()
  tenDanhMuc: string;
  @ApiProperty()
  hinhAnh: string;
}
