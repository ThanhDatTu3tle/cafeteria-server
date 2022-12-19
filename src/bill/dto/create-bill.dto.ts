import { ApiProperty } from '@nestjs/swagger';

export class CreateBillDto {
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  maChiTietDonHang: string;
  @ApiProperty()
  soLuong: number;
  @ApiProperty()
  thanhTien: number;
}
