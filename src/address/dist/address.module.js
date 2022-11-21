"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddressModule = void 0;
var common_1 = require("@nestjs/common");
var address_service_1 = require("./address.service");
var address_controller_1 = require("./address.controller");
var typeorm_1 = require("@nestjs/typeorm");
var Danhsachdiachi_1 = require("output/entities/Danhsachdiachi");
var Khachhang_1 = require("output/entities/Khachhang");
var AddressModule = /** @class */ (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([Danhsachdiachi_1.Danhsachdiachi, Khachhang_1.Khachhang])],
            controllers: [address_controller_1.AddressController],
            providers: [address_service_1.AddressService]
        })
    ], AddressModule);
    return AddressModule;
}());
exports.AddressModule = AddressModule;
