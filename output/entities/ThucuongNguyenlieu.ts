import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Nguyenlieu } from "./Nguyenlieu";
import { Thucuong } from "./Thucuong";

// @Index("PK__THUCUONG__7B15629C58200154", ["maThucUong", "maNguyenLieu"], {
//   unique: true,
// })
@Entity("THUCUONG_NGUYENLIEU", { schema: "dbo" })
export class ThucuongNguyenlieu {
  @Column("nvarchar", { primary: true, name: "MaThucUong", length: 10 })
  maThucUong: string;

  @Column("nvarchar", { primary: true, name: "MaNguyenLieu", length: 10 })
  maNguyenLieu: string;

  @Column("int", { name: "SoLuong" })
  soLuong: number;

  @ManyToOne(() => Nguyenlieu, (nguyenlieu) => nguyenlieu.thucuongNguyenlieus)
  @JoinColumn([{ name: "MaNguyenLieu", referencedColumnName: "maNguyenLieu" }])
  maNguyenLieu2: Nguyenlieu;

  @ManyToOne(() => Thucuong, (thucuong) => thucuong.thucuongNguyenlieus)
  @JoinColumn([{ name: "MaThucUong", referencedColumnName: "maThucUong" }])
  maThucUong2: Thucuong;
}
