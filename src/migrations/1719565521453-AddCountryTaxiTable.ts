import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTaxiTable1719565521453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE country_taxi (id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(), country_id uuid NOT NULL, name character varying NOT NULL, created_at timestamp(6) DEFAULT CURRENT_TIMESTAMP, updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP)',
    );
    await queryRunner.query(
      'ALTER TABLE country_taxi ADD CONSTRAINT FK_countryTaxi FOREIGN KEY(country_id) REFERENCES country(id)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE country_taxi DROP CONSTRAINT FK_countryTaxi',
    );
    await queryRunner.query('DROP TABLE country_taxi');
  }
}
