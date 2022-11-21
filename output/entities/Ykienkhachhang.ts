import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Khachhang } from "./Khachhang";

// @Index("PK__YKIENKHA__A84C6BFD536D38DD", ["maYKien"], { unique: true })
@Entity("YKIENKHACHHANG", { schema: "dbo" })
export class Ykienkhachhang {
  @Column("nvarchar", { primary: true, name: "MaYKien", length: 10 })
  maYKien: string;

  @Column("nvarchar", { name: "NoiDung", nullable: true, length: 250 })
  noiDung: string | null;

  @Column("int", { name: "DanhGia" })
  danhGia: number;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.ykienkhachhangs)
  @JoinColumn([{ name: "Email", referencedColumnName: "email" }])
  email: Khachhang;
}
