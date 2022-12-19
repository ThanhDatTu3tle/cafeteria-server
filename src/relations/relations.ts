const ProductRelations = [
  'maDanhMuc',
]

const FeedbackRelations = [
  'email',
]

const AddressRelations = [
  'email',
]

const OrderRelations = [
  'email',
  'maDiaChi',
]

const FavoriteRelations = [
  'email',
  'maThucUong',
]

const FormulaRelations = [
  'maThucUong',
  'maNguyenLieu',
]

const BillRelations = [
  'maThucUong',
  'maChiTietDonHang',
]

export {
  ProductRelations,
  FeedbackRelations,
  AddressRelations,
  OrderRelations,
  FavoriteRelations,
  FormulaRelations,
  BillRelations,
};
