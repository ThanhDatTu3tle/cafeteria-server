import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Thucuong } from "./Thucuong";
import { Chitietdonhang } from "./Chitietdonhang";

// @Index("PK__THUCUONG__F3D0CFF4E21A3549", ["maThucUong", "maChiTietDonHang"], {
//   unique: true,
// })
@Entity("THUCUONG_DONHANG", { schema: "dbo" })
export class ThucuongDonhang {
  @Column("nvarchar", { primary: true, name: "MaThucUong", length: 10 })
  maThucUong: string;

  @Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
  maChiTietDonHang: string;

  @Column("int", { name: "SoLuong" })
  soLuong: number;

  @Column("float", { name: "ThanhTien", precision: 53 })
  thanhTien: number;

  @ManyToOne(() => Thucuong, (thucuong) => thucuong.thucuongDonhangs)
  @JoinColumn([{ name: "MaThucUong", referencedColumnName: "maThucUong" }])
  maThucUong2: Thucuong;

  @ManyToOne(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.thucuongDonhangs
  )
  @JoinColumn([
    { name: "MaChiTietDonHang", referencedColumnName: "maChiTietDonHang" },
  ])
  maChiTietDonHang2: Chitietdonhang;
}
