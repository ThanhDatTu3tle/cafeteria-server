import { ApiProperty } from '@nestjs/swagger';

export class Feedback {
  @ApiProperty()
  maYKien: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  noiDung: string;
  @ApiProperty()
  danhGia: number;
}
