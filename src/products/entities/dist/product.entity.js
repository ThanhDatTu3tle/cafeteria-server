"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var swagger_1 = require("@nestjs/swagger");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "maMonAn");
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "maDanhMuc");
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "tenMonAn");
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "moTaChiTiet");
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "hinhAnhMonAn");
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "giaTien");
    __decorate([
        swagger_1.ApiProperty()
    ], Product.prototype, "yeuThich");
    return Product;
}());
exports.Product = Product;
