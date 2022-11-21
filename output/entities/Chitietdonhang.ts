import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Khachhang } from "./Khachhang";
import { Danhsachdiachi } from "./Danhsachdiachi";
import { ThucuongDonhang } from "./ThucuongDonhang";

// @Index("PK__CHITIETD__4B0B45DD5A6CC0BA", ["maChiTietDonHang"], { unique: true })
@Entity("CHITIETDONHANG", { schema: "dbo" })
export class Chitietdonhang {
  @Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
  maChiTietDonHang: string;

  @Column("time", { name: "GioDat" })
  gioDat: Date;

  @Column("smalldatetime", { name: "NgayDat" })
  ngayDat: Date;

  @Column("float", { name: "ThanhTien", precision: 53 })
  thanhTien: number;

  @Column("nvarchar", { name: "MaGiamGia", length: 10 })
  maGiamGia: string;

  @Column("nvarchar", { name: "TrangThai", length: 50 })
  trangThai: string;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.chitietdonhangs)
  @JoinColumn([{ name: "Email", referencedColumnName: "email" }])
  email: Khachhang;

  @ManyToOne(
    () => Danhsachdiachi,
    (danhsachdiachi) => danhsachdiachi.chitietdonhangs
  )
  @JoinColumn([{ name: "MaDiaChi", referencedColumnName: "maDiaChi" }])
  maDiaChi: Danhsachdiachi;

  @OneToMany(
    () => ThucuongDonhang,
    (thucuongDonhang) => thucuongDonhang.maChiTietDonHang2
  )
  thucuongDonhangs: ThucuongDonhang[];
}
