"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmModule = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const datasource_1 = require("./datasource");
let TypeOrmModule = class TypeOrmModule {
};
exports.TypeOrmModule = TypeOrmModule;
exports.TypeOrmModule = TypeOrmModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: typeorm_1.DataSource,
                inject: [],
                useFactory: async () => {
                    try {
                        await datasource_1.default.initialize();
                        console.log('Database connected successfully');
                        return datasource_1.default;
                    }
                    catch (error) {
                        console.log('Error connecting to database');
                        throw error;
                    }
                },
            },
        ],
        exports: [typeorm_1.DataSource],
    })
], TypeOrmModule);
//# sourceMappingURL=typeorm.module.js.map