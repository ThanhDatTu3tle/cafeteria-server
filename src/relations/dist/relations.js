"use strict";
exports.__esModule = true;
exports.FavoriteRelations = exports.OrderRelations = exports.AddressRelations = exports.FeedbackRelations = exports.ProductRelations = void 0;
var ProductRelations = [
    'maDanhMuc',
];
exports.ProductRelations = ProductRelations;
var FeedbackRelations = [
    'maKhachHang',
];
exports.FeedbackRelations = FeedbackRelations;
var AddressRelations = [
    'maKhachHang',
];
exports.AddressRelations = AddressRelations;
var OrderRelations = [
    'maKhachHang',
    'maDiaChi',
];
exports.OrderRelations = OrderRelations;
var FavoriteRelations = [
    'maKhachHang',
    'maMonAn',
];
exports.FavoriteRelations = FavoriteRelations;
