import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCountryTaxiTableNew1720358590143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "country_taxi" ("country_id" uuid NOT NULL, "taxi_id" uuid NOT NULL, PRIMARY KEY ("country_id", "taxi_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_taxi" ADD CONSTRAINT "FK_countryId" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_taxi" ADD CONSTRAINT "FK_taxiId" FOREIGN KEY ("taxi_id") REFERENCES "taxi"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "country_taxi" DROP CONSTRAINT "FK_countryId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_taxi" DROP CONSTRAINT "FK_taxiId"`,
    );
    await queryRunner.query(`DROP TABLE "country_taxi"`);
  }
}
