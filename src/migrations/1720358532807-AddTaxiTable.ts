import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTaxiTableNew1720358532807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE taxi (id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(), name character varying NOT NULL, created_at timestamp(6) DEFAULT CURRENT_TIMESTAMP, updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE taxi');
  }
}
