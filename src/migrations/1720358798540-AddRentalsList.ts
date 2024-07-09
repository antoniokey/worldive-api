import { MigrationInterface, QueryRunner } from 'typeorm';

const rentals = [
  'Airbnb',
  'Vrbo',
  'Booking.com',
  'HomeAway',
  'Zillow',
  'Apartments.com',
  'Rent.com',
  'Sublet.com',
  'Nestpick',
  'Expedia',
  'Hotels.com',
  'Agoda',
  'TripAdvisor',
  'Priceline',
  'Orbitz',
  'Trivago',
  'Kayak',
  'Hotwire',
  'Couchsurfing',
  'Hostelworld',
  'Roomster',
  'Homestay.com',
  'Spotahome',
];

export class AddRentalsList1720358798540 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const rental of rentals) {
      await queryRunner.query(`INSERT INTO rental (name) VALUES ($1)`, [
        rental,
      ]);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM rental');
  }
}
