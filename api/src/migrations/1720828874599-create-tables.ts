import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1720828874599 implements MigrationInterface {
    name = 'CreateTables1720828874599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "createdAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "createdAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
    }

}
