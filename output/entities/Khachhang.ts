import { Column, Entity, Index, OneToMany } from "typeorm";
import { Chitietdonhang } from "./Chitietdonhang";
import { Danhsachdiachi } from "./Danhsachdiachi";
import { Thucuongyeuthich } from "./Thucuongyeuthich";
import { Ykienkhachhang } from "./Ykienkhachhang";

// @Index("PK__KHACHHAN__A9D10535AF2CA98F", ["email"], { unique: true })
@Entity("KHACHHANG", { schema: "dbo" })
export class Khachhang {
  @Column("nvarchar", { primary: true, name: "Email", length: 50 })
  email: string;

  @Column("nvarchar", { name: "HoTen", length: 50 })
  hoTen: string;

  @Column("smalldatetime", { name: "NgaySinh" })
  ngaySinh: Date;

  @Column("nvarchar", { name: "SoDienThoai", length: 10 })
  soDienThoai: string;

  @Column("nvarchar", { name: "MatKhau", length: 50 })
  matKhau: string;

  @Column("nvarchar", { name: "HinhAnh", length: 250 })
  hinhAnh: string;

  @OneToMany(() => Chitietdonhang, (chitietdonhang) => chitietdonhang.email)
  chitietdonhangs: Chitietdonhang[];

  @OneToMany(() => Danhsachdiachi, (danhsachdiachi) => danhsachdiachi.email)
  danhsachdiachis: Danhsachdiachi[];

  @OneToMany(
    () => Thucuongyeuthich,
    (thucuongyeuthich) => thucuongyeuthich.email
  )
  thucuongyeuthiches: Thucuongyeuthich[];

  @OneToMany(() => Ykienkhachhang, (ykienkhachhang) => ykienkhachhang.email)
  ykienkhachhangs: Ykienkhachhang[];
}
