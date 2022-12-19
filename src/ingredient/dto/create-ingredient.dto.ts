import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  
  @ApiProperty()
  maNguyenLieu: string;
  @ApiProperty()
  tenNguyenLieu: string;
  @ApiProperty()
  soLuong: number;
}
