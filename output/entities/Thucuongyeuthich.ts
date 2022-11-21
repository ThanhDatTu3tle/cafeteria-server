import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Thucuong } from "./Thucuong";
import { Khachhang } from "./Khachhang";

// @Index("PK__THUCUONG__08C66A22035A5445", ["maThucUongYeuThich"], {
//   unique: true,
// })
@Entity("THUCUONGYEUTHICH", { schema: "dbo" })
export class Thucuongyeuthich {
  @Column("nvarchar", { primary: true, name: "MaThucUongYeuThich", length: 10 })
  maThucUongYeuThich: string;

  @ManyToOne(() => Thucuong, (thucuong) => thucuong.thucuongyeuthiches)
  @JoinColumn([{ name: "MaThucUong", referencedColumnName: "maThucUong" }])
  maThucUong: Thucuong;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.thucuongyeuthiches)
  @JoinColumn([{ name: "Email", referencedColumnName: "email" }])
  email: Khachhang;
}
