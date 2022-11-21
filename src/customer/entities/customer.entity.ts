import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  
  @ApiProperty()
  email: string;
  @ApiProperty()
  hoTen: string;
  @ApiProperty()
  soDienThoai: string;
  @ApiProperty()
  matKhau: string;
  @ApiProperty()
  hinhAnh: string;
}
