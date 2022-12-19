import { ApiProperty } from '@nestjs/swagger';

export class CreateFormulaDto {
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  maNguyenLieu: string;
  @ApiProperty()
  soLuong: number;
}
