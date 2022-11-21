"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerModule = void 0;
var common_1 = require("@nestjs/common");
var customer_service_1 = require("./customer.service");
var customer_controller_1 = require("./customer.controller");
var typeorm_1 = require("@nestjs/typeorm");
var Khachhang_1 = require("../../output/entities/Khachhang");
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([Khachhang_1.Khachhang])],
            controllers: [customer_controller_1.CustomerController],
            providers: [customer_service_1.CustomerService]
        })
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
