import { ApiProperty } from '@nestjs/swagger';

export class Bill {
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  maChiTietDonHang: string;
  @ApiProperty()
  soLuong: number;
  @ApiProperty()
  thanhTien: number;
}
