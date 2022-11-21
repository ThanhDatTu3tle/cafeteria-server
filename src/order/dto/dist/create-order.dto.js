"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateOrderDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var CreateOrderDto = /** @class */ (function () {
    function CreateOrderDto() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "maChiTietDonHang");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "email");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "maDiaChi");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "gioDat");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "ngayDat");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "thanhTien");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "maGiamGia");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateOrderDto.prototype, "trangThai");
    return CreateOrderDto;
}());
exports.CreateOrderDto = CreateOrderDto;
