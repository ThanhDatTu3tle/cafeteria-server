import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoriteDto {
  @ApiProperty()
  maThucUongYeuThich: string;
  @ApiProperty()
  maThucUong: string;
  @ApiProperty()
  email: string;
}
