import { ApiProperty } from '@nestjs/swagger';

export class Formula {
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  maNguyenLieu: string;
  @ApiProperty()
  soLuong: number;
}
