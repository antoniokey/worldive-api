import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCountryRentalTable1720358808508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "country_rental" ("country_id" uuid NOT NULL, "rental_id" uuid NOT NULL, PRIMARY KEY ("country_id", "rental_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_rental" ADD CONSTRAINT "FK_countryId" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_rental" ADD CONSTRAINT "FK_rentalId" FOREIGN KEY ("rental_id") REFERENCES "rental"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "country_rental" DROP CONSTRAINT "FK_countryId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "country_rental" DROP CONSTRAINT "FK_rentalId"`,
    );
    await queryRunner.query(`DROP TABLE "country_rental"`);
  }
}
