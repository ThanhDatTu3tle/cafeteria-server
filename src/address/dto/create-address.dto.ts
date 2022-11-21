import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  maDiaChi: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  diaChi: string;
  @ApiProperty()
  tenDiaChi: string;
}
