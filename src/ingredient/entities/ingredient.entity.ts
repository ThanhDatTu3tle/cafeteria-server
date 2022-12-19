import { ApiProperty } from '@nestjs/swagger';

export class Ingredient {

  @ApiProperty()
  maNguyenLieu: string;
  @ApiProperty()
  tenNguyenLieu: string;
  @ApiProperty()
  soLuong: number;
}
