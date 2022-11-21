import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  
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
