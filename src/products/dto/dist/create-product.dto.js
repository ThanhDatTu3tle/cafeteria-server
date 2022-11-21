"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProductDto = void 0;
var swagger_1 = require("@nestjs/swagger");
// import { Danhmuc } from 'output/entities/Danhmuc';
var CreateProductDto = /** @class */ (function () {
    function CreateProductDto() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "maMonAn");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "maDanhMuc");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "tenMonAn");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "hinhAnhMonAn");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "moTaChiTiet");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "giaTien");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateProductDto.prototype, "yeuThich");
    return CreateProductDto;
}());
exports.CreateProductDto = CreateProductDto;
