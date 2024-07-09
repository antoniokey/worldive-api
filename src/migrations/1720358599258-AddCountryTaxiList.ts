import { MigrationInterface, QueryRunner } from 'typeorm';

const taxisList = [
  {
    countryName: 'Australia',
    taxis: ['GoCatch', 'Uber', 'InGoGo', 'ComfortDelGro', 'Taxify'],
  },
  {
    countryName: 'Austria',
    taxis: ['taxi.eu', 'mytaxi', 'Taxify', 'Uber'],
  },
  {
    countryName: 'Azerbaijan',
    taxis: ['Maxim Taxi', 'Omega Taxi', 'Taxify', 'Uber'],
  },
  {
    countryName: 'Armenia',
    taxis: ['Yandex.Taxi', 'GG Taxi', 'Maxim Taxi'],
  },
  {
    countryName: 'Belarus',
    taxis: ['Yandex.Taxi', 'Maxim Taxi', 'Uber BY', 'NextApp', 'Friday'],
  },
  {
    countryName: 'Belgium',
    taxis: ['taxi.eu', 'eCab'],
  },
  {
    countryName: 'Bulgaria',
    taxis: ['Maxim Taxi', 'TaxiMe', 'Triumf Taxi'],
  },
  {
    countryName: 'United Kingdom',
    taxis: ['Uber', 'mytaxi', 'Gett', 'Kabbee', 'Taxify'],
  },
  {
    countryName: 'Hungary',
    taxis: ['City Taxi', 'Taxify', 'Főtaxi'],
  },
  {
    countryName: 'Vietnam',
    taxis: ['GrabTaxi', 'ComfortDelGro'],
  },
  {
    countryName: 'Germany',
    taxis: ['mytaxi', 'taxi.eu', 'Uber'],
  },
  {
    countryName: 'Hong Kong',
    taxis: ['HKTaxi', 'Flytaxi', 'DiDi Hong Kong', 'God Taxi 85', 'SynCab'],
  },
  {
    countryName: 'Greece',
    taxis: ['Beat', 'taxi.eu'],
  },
  {
    countryName: 'Georgia',
    taxis: ['Maxim Taxi', 'Yandex.Taxi', 'Taxify'],
  },
  {
    countryName: 'Denmark',
    taxis: ['taxi.eu', 'TAXA 4×35'],
  },
  {
    countryName: 'Egypt',
    taxis: ['Careem', 'Uber'],
  },
  {
    countryName: 'Israel',
    taxis: ['Gett', 'Uber'],
  },
  {
    countryName: 'India',
    taxis: ['Uber', 'Ola Cabs'],
  },
  {
    countryName: 'Indonesia',
    taxis: ['GrabTaxi', 'My Blue Bird', 'Go-Jek'],
  },
  {
    countryName: 'Jordan',
    taxis: ['Careem', 'Uber'],
  },
  {
    countryName: 'Ireland',
    taxis: ['mytaxi', 'Uber', 'Lynk', 'eCab', 'taxi.eu'],
  },
  {
    countryName: 'Spain',
    taxis: ['Cabify', 'mytaxi', 'Uber'],
  },
  {
    countryName: 'Italy',
    taxis: ['it Taxi', 'mytaxi'],
  },
  {
    countryName: 'Kazakhstan',
    taxis: ['Yandex.Taxi', 'InDriver', 'Maxim Taxi', 'Uber'],
  },
  {
    countryName: 'Cambodia',
    taxis: ['GrabTaxi', 'PassApp', 'EXNET Taxi', 'iTsumo'],
  },
  {
    countryName: 'Qatar',
    taxis: ['Careem', 'Uber', 'QatarTaxi'],
  },
  {
    countryName: 'Kenya',
    taxis: ['Uber', 'Little Cab', 'Taxify', 'Mondo Ride'],
  },
  {
    countryName: 'Cyprus',
    taxis: ['nTaxi', 'Taxify'],
  },
  {
    countryName: 'Kyrgyzstan',
    taxis: ['Yandex.Taxi', 'Namba Taxi', 'Maxim Taxi'],
  },
  {
    countryName: 'China',
    taxis: ['DiDi'],
  },
  {
    countryName: 'Latvia',
    taxis: ['Taxify', 'Yandex.Taxi'],
  },
  {
    countryName: 'Latin America',
    taxis: ['EasyTaxi', 'Easy Tappsi', 'inDriver', 'Uber', 'Cabify'],
  },
  {
    countryName: 'Lithuania',
    taxis: ['eTAKSI', 'Taxify', 'Yandex.Taxi', 'Uber'],
  },
  {
    countryName: 'Malaysia',
    taxis: ['GrabTaxi', 'ComfortDelGro'],
  },
  {
    countryName: 'Malta',
    taxis: ['Taxify', 'eCabs'],
  },
  {
    countryName: 'Morocco',
    taxis: ['Careem'],
  },
  {
    countryName: 'Moldova',
    taxis: ['iTaxi', 'Yandex.Taxi'],
  },
  {
    countryName: 'Myanmar',
    taxis: ['GrabTaxi', 'Uber', 'Oway Ride'],
  },
  {
    countryName: 'Netherlands',
    taxis: ['Uber', 'taxi.eu', 'eCab'],
  },
  {
    countryName: 'Norway',
    taxis: ['Mivai', 'Norges Taxi'],
  },
  {
    countryName: 'UAE',
    taxis: ['Careem', 'Uber', 'Dubai Taxi'],
  },
  {
    countryName: 'Poland',
    taxis: ['Uber', 'mytaxi', 'CAB4YOU', 'iTaxi', 'Taxify'],
  },
  {
    countryName: 'Portugal',
    taxis: ['Uber', 'Cabify', 'mytaxi', 'Taxify', 'Chauffeur Privé'],
  },
  {
    countryName: 'Romania',
    taxis: ['Star Taxi', 'Clever Taxi', 'Uber', 'Taxify'],
  },
  {
    countryName: 'Serbia',
    taxis: ['Cammeo', 'Taxify', 'Yandex.Taxi', 'CAR:GO'],
  },
  {
    countryName: 'Singapore',
    taxis: ['GrabTaxi', 'ComfortDelGro'],
  },
  {
    countryName: 'Slovakia',
    taxis: ['Taxify', 'HOPIN', 'Liftago'],
  },
  {
    countryName: 'Slovenia',
    taxis: ['Cammeo', 'HOPIN', 'TaxiMetro'],
  },
  {
    countryName: 'USA',
    taxis: ['Lyft', 'Uber', 'Curb', 'inDriver', 'Juno'],
  },
  {
    countryName: 'Thailand',
    taxis: ['GrabTaxi', 'GoBike'],
  },
  {
    countryName: 'Turkey',
    taxis: ['BiTaksi', 'Careem'],
  },
  {
    countryName: 'Uzbekistan',
    taxis: ['Yandex.Taxi', 'InDriver', 'MyTaxi.uz', 'Maxim Taxi'],
  },
  {
    countryName: 'Ukraine',
    taxis: ['Uber', 'Uklon', 'Maxim Taxi', 'OnTaxi', 'Bond Taxi'],
  },
  {
    countryName: 'Philippines',
    taxis: ['GrabTaxi', 'MiCab'],
  },
  {
    countryName: 'Finland',
    taxis: ['Menevä', 'Taxify', 'Uber', 'Yandex.Taxi', 'Taksi Helsinki'],
  },
  {
    countryName: 'France',
    taxis: ['Uber', 'G7', 'LeCab', 'eCab', 'Chauffeur Privé', 'Taxify'],
  },
  {
    countryName: 'Croatia',
    taxis: ['Cammeo', 'EkoTaxi', 'CAR:GO', 'Uber (semi-legal, but operates)'],
  },
  {
    countryName: 'Montenegro',
    taxis: ['Maxim Taxi', 'CAR:GO'],
  },
  {
    countryName: 'Czech Republic',
    taxis: ['Liftago', 'Taxify', 'taxi.eu', 'Uber'],
  },
  {
    countryName: 'Switzerland',
    taxis: ['taxi.eu', 'Uber'],
  },
  {
    countryName: 'Sweden',
    taxis: ['Taxi 020', 'Uber', 'Taxi Stockholm'],
  },
  {
    countryName: 'Estonia',
    taxis: ['Taxify', 'Uber', 'Talixo'],
  },
  {
    countryName: 'Japan',
    taxis: ['JapanTaxi', 'Uber', 'Takkun Tokyo Taxi'],
  },
];

const getTaxis = (taxis: string[]) =>
  taxis.map((taxi) => `'${taxi}'`).join(',');

export class AddCountryTaxiList1720358599258 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const { countryName, taxis } of taxisList) {
      const [country] = await queryRunner.query(
        'SELECT id FROM country WHERE name = $1',
        [countryName],
      );

      if (country) {
        const foundTaxis = await queryRunner.query(
          `SELECT id FROM taxi WHERE name IN (${getTaxis(taxis)})`,
        );

        if (foundTaxis?.length) {
          for (const foundTaxi of foundTaxis) {
            await queryRunner.query(
              `INSERT INTO country_taxi (country_id, taxi_id) VALUES ($1, $2)`,
              [country.id, foundTaxi.id],
            );
          }
        }
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM country_taxi');
  }
}
