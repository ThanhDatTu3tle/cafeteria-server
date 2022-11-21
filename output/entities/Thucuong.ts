import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Danhmuc } from "./Danhmuc";
import { ThucuongDonhang } from "./ThucuongDonhang";
import { ThucuongNguyenlieu } from "./ThucuongNguyenlieu";
import { Thucuongyeuthich } from "./Thucuongyeuthich";

// @Index("PK__THUCUONG__37607BA9248A5D57", ["maThucUong"], { unique: true })
@Entity("THUCUONG", { schema: "dbo" })
export class Thucuong {
  @Column("nvarchar", { primary: true, name: "MaThucUong", length: 10 })
  maThucUong: string;

  @Column("nvarchar", { name: "TenThucUong", length: 50 })
  tenThucUong: string;

  @Column("nvarchar", { name: "HinhAnhThucUong", length: 250 })
  hinhAnhThucUong: string;

  @Column("nvarchar", { name: "MoTaChiTiet", length: 250 })
  moTaChiTiet: string;

  @Column("float", { name: "GiaTien", precision: 53 })
  giaTien: number;

  @Column("bit", { name: "YeuThich" })
  yeuThich: boolean;

  @ManyToOne(() => Danhmuc, (danhmuc) => danhmuc.thucuongs)
  @JoinColumn([{ name: "MaDanhMuc", referencedColumnName: "maDanhMuc" }])
  maDanhMuc: Danhmuc;

  @OneToMany(
    () => ThucuongDonhang,
    (thucuongDonhang) => thucuongDonhang.maThucUong2
  )
  thucuongDonhangs: ThucuongDonhang[];

  @OneToMany(
    () => ThucuongNguyenlieu,
    (thucuongNguyenlieu) => thucuongNguyenlieu.maThucUong2
  )
  thucuongNguyenlieus: ThucuongNguyenlieu[];

  @OneToMany(
    () => Thucuongyeuthich,
    (thucuongyeuthich) => thucuongyeuthich.maThucUong
  )
  thucuongyeuthiches: Thucuongyeuthich[];
}
