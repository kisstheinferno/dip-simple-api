import { MigrationInterface, QueryRunner } from "typeorm";

export class EditTodosTable1720041770562 implements MigrationInterface {
    name = 'EditTodosTable1720041770562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
    }

}



