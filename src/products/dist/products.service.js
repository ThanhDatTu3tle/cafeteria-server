"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductsService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var relations_1 = require("src/relations/relations");
var Monan_1 = require("../../output/entities/Monan");
var Danhmuc_1 = require("../../output/entities/Danhmuc");
// import { markAsUntransferable } from 'worker_threads';
var ProductsService = /** @class */ (function () {
    function ProductsService(productRepository, categoriesRepository) {
        this.productRepository = productRepository;
        this.categoriesRepository = categoriesRepository;
    }
    ProductsService.prototype.create = function (createProductDto) {
        return __awaiter(this, void 0, Promise, function () {
            var categoriesBody, categories, newProduct, findAndReturn, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        categoriesBody = createProductDto.maDanhMuc;
                        return [4 /*yield*/, this.categoriesRepository.findOneByOrFail({
                                maDanhMuc: categoriesBody
                            })];
                    case 1:
                        categories = _a.sent();
                        newProduct = this.productRepository.create();
                        newProduct.maMonAn = createProductDto.maMonAn;
                        newProduct.maDanhMuc = categories;
                        newProduct.tenMonAn = createProductDto.tenMonAn;
                        newProduct.hinhAnhMonAn = createProductDto.hinhAnhMonAn;
                        newProduct.moTaChiTiet = createProductDto.moTaChiTiet;
                        newProduct.giaTien = createProductDto.giaTien;
                        newProduct.yeuThich = createProductDto.yeuThich;
                        return [4 /*yield*/, this.productRepository.save(newProduct)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.productRepository.findOneOrFail({
                                relations: relations_1.ProductRelations,
                                where: { maMonAn: newProduct.maMonAn }
                            })];
                    case 3:
                        findAndReturn = _a.sent();
                        return [2 /*return*/, findAndReturn];
                    case 4:
                        err_1 = _a.sent();
                        throw err_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductsService.prototype.getAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            var getAll;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productRepository.find({
                            relations: relations_1.ProductRelations
                        })];
                    case 1:
                        getAll = _a.sent();
                        return [2 /*return*/, getAll];
                }
            });
        });
    };
    ProductsService.prototype.findCategory = function (maDanhMuc) {
        return __awaiter(this, void 0, void 0, function () {
            var category, product, arrChicken, arrHamburger, arrRicepasta, i, start, end_start;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productRepository.find({
                            relations: relations_1.ProductRelations
                        })];
                    case 1:
                        category = _a.sent();
                        return [4 /*yield*/, this.productRepository.find()];
                    case 2:
                        product = _a.sent();
                        arrChicken = [];
                        arrHamburger = [];
                        arrRicepasta = [];
                        for (i = 0; i < product.length; i++) {
                            if (product[i].maMonAn.charAt(5) === '0') {
                                arrChicken.push(product[i]);
                            }
                            else if (product[i].maMonAn.charAt(5) === '1') {
                                arrHamburger.push(product[i]);
                            }
                            else if (product[i].maMonAn.charAt(5) === '2') {
                                arrRicepasta.push(product[i]);
                            }
                            // ...
                        }
                        start = 0;
                        end_start = arrChicken.length;
                        if (maDanhMuc === 'MDM01') {
                            return [2 /*return*/, category.slice(start, end_start)];
                        }
                        else if (maDanhMuc === 'MDM02') {
                            return [2 /*return*/, category.slice(end_start, end_start + arrHamburger.length)];
                        }
                        else if (maDanhMuc === 'MDM03') {
                            return [2 /*return*/, category.slice(end_start + arrHamburger.length, end_start + arrHamburger.length + arrRicepasta.length)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsService.prototype.update = function (maMonAn, updateProductDto) {
        return __awaiter(this, void 0, Promise, function () {
            var updateProduct, result, findAndReturn, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.productRepository.findOneByOrFail({ maMonAn: maMonAn })];
                    case 1:
                        updateProduct = _a.sent();
                        // Foreign key Danhmuc: categories
                        // const getCategoriesBody = updateProductDto.maDanhMuc;
                        // const findCategories = await this.categoriesRepository.findOneByOrFail({
                        //   maDanhMuc: getCategoriesBody,
                        // });
                        // updateProduct.maDanhMuc = findCategories
                        console.log(updateProduct.maMonAn);
                        console.log(typeof updateProduct);
                        return [4 /*yield*/, this.productRepository.save(__assign({}, updateProduct))];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, this.productRepository.findOneOrFail({
                                relations: relations_1.ProductRelations,
                                where: { maMonAn: updateProduct.maMonAn }
                            })];
                    case 3:
                        findAndReturn = _a.sent();
                        return [2 /*return*/, findAndReturn];
                    case 4:
                        err_2 = _a.sent();
                        throw err_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductsService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(Monan_1.Monan)),
        __param(1, typeorm_1.InjectRepository(Danhmuc_1.Danhmuc))
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
