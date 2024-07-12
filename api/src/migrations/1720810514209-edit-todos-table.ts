import { MigrationInterface, QueryRunner } from "typeorm";

export class EditTodosTable1720810514209 implements MigrationInterface {
    name = 'EditTodosTable1720810514209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying`);
    }

}
