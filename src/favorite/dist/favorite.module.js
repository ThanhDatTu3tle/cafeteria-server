"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FavoriteModule = void 0;
var common_1 = require("@nestjs/common");
var favorite_service_1 = require("./favorite.service");
var favorite_controller_1 = require("./favorite.controller");
var typeorm_1 = require("@nestjs/typeorm");
var Monanyeuthich_1 = require("output/entities/Monanyeuthich");
var Khachhang_1 = require("output/entities/Khachhang");
var Monan_1 = require("output/entities/Monan");
var FavoriteModule = /** @class */ (function () {
    function FavoriteModule() {
    }
    FavoriteModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([Monanyeuthich_1.Monanyeuthich, Khachhang_1.Khachhang, Monan_1.Monan])],
            controllers: [favorite_controller_1.FavoriteController],
            providers: [favorite_service_1.FavoriteService]
        })
    ], FavoriteModule);
    return FavoriteModule;
}());
exports.FavoriteModule = FavoriteModule;
