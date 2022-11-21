"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderModule = void 0;
var common_1 = require("@nestjs/common");
var order_service_1 = require("./order.service");
var order_controller_1 = require("./order.controller");
var typeorm_1 = require("@nestjs/typeorm");
var Chitietdonhang_1 = require("output/entities/Chitietdonhang");
var Khachhang_1 = require("output/entities/Khachhang");
var Danhsachdiachi_1 = require("output/entities/Danhsachdiachi");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([Chitietdonhang_1.Chitietdonhang, Khachhang_1.Khachhang, Danhsachdiachi_1.Danhsachdiachi])],
            controllers: [order_controller_1.OrderController],
            providers: [order_service_1.OrderService]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
