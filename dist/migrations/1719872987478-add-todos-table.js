"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTodosTable1719872987478 = void 0;
class AddTodosTable1719872987478 {
    constructor() {
        this.name = 'AddTodosTable1719872987478';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "test"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" ADD "test" character varying`);
    }
}
exports.AddTodosTable1719872987478 = AddTodosTable1719872987478;
//# sourceMappingURL=1719872987478-add-todos-table.js.map