import { Column, Entity, Index, OneToMany } from "typeorm";
import { Thucuong } from "./Thucuong";

// @Index("PK__DANHMUC__B3750887B8D776BD", ["maDanhMuc"], { unique: true })
@Entity("DANHMUC", { schema: "dbo" })
export class Danhmuc {
  @Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 5 })
  maDanhMuc: string;

  @Column("nvarchar", { name: "TenDanhMuc", length: 50 })
  tenDanhMuc: string;

  @Column("nvarchar", { name: "HinhAnh", length: 250 })
  hinhAnh: string;

  @OneToMany(() => Thucuong, (thucuong) => thucuong.maDanhMuc)
  thucuongs: Thucuong[];
}
