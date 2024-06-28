import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { GetTaxisArgs } from './taxis-args';
import { TaxiEntity } from './entity/taxi.entity';

@Injectable()
export class TaxisService {
  constructor(
    @InjectRepository(TaxiEntity)
    private readonly taxisRepository: Repository<TaxiEntity>,
  ) {}

  public async getAll(input: GetTaxisArgs): Promise<TaxiEntity[]> {
    return this.taxisRepository
      .createQueryBuilder('country_taxi')
      .where('country_taxi.country_id = :countryId', { countryId: input.countryId })
      .getMany();
  }
}
