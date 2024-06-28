import { MigrationInterface, QueryRunner } from 'typeorm';

const countries = [
  'Australia',
  'Austria',
  'Azerbaijan',
  'Armenia',
  'Belarus',
  'Belgium',
  'Bulgaria',
  'United Kingdom',
  'Hungary',
  'Vietnam',
  'Germany',
  'Hong Kong',
  'Greece',
  'Georgia',
  'Denmark',
  'Egypt',
  'Israel',
  'India',
  'Indonesia',
  'Jordan',
  'Ireland',
  'Spain',
  'Italy',
  'Kazakhstan',
  'Cambodia',
  'Qatar',
  'Kenya',
  'Cyprus',
  'Kyrgyzstan',
  'China',
  'Latvia',
  'Latin America',
  'Lithuania',
  'Malaysia',
  'Malta',
  'Morocco',
  'Moldova',
  'Myanmar',
  'Netherlands',
  'Norway',
  'UAE',
  'Poland',
  'Portugal',
  'Romania',
  'Serbia',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'USA',
  'Thailand',
  'Turkey',
  'Uzbekistan',
  'Ukraine',
  'Philippines',
  'Finland',
  'France',
  'Croatia',
  'Montenegro',
  'Czech Republic',
  'Switzerland',
  'Sweden',
  'Estonia',
  'Japan',
];

export class AddCountriesList1719132541578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      countries.map((country) =>
        queryRunner.query(`INSERT INTO country (name) VALUES ('${country}')`),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      countries.map((country) =>
        queryRunner.query(`DELETE FROM country WHERE name = '${country}'`),
      ),
    );
  }
}
