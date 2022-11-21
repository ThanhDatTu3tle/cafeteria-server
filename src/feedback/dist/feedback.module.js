"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeedbackModule = void 0;
var common_1 = require("@nestjs/common");
var feedback_service_1 = require("./feedback.service");
var feedback_controller_1 = require("./feedback.controller");
var typeorm_1 = require("@nestjs/typeorm");
var Ykienkhachhang_1 = require("output/entities/Ykienkhachhang");
var Khachhang_1 = require("output/entities/Khachhang");
var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([Ykienkhachhang_1.Ykienkhachhang, Khachhang_1.Khachhang])],
            controllers: [feedback_controller_1.FeedbackController],
            providers: [feedback_service_1.FeedbackService]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());
exports.FeedbackModule = FeedbackModule;
