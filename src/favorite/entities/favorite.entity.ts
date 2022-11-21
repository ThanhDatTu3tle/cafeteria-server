import { ApiProperty } from '@nestjs/swagger';

export class Favorite {
  @ApiProperty()
  maThucUongYeuThich: string;
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  email: string;
}
