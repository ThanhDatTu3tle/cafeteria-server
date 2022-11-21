import { Column, Entity, Index, OneToMany } from "typeorm";
import { ThucuongNguyenlieu } from "./ThucuongNguyenlieu";

// @Index("PK__NGUYENLI__C75193557B78D5EB", ["maNguyenLieu"], { unique: true })
@Entity("NGUYENLIEU", { schema: "dbo" })
export class Nguyenlieu {
  @Column("nvarchar", { primary: true, name: "MaNguyenLieu", length: 10 })
  maNguyenLieu: string;

  @Column("nvarchar", { name: "TenNguyenLieu", length: 50 })
  tenNguyenLieu: string;

  @Column("int", { name: "SoLuong" })
  soLuong: number;

  @OneToMany(
    () => ThucuongNguyenlieu,
    (thucuongNguyenlieu) => thucuongNguyenlieu.maNguyenLieu2
  )
  thucuongNguyenlieus: ThucuongNguyenlieu[];
}
