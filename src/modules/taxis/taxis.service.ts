import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TaxiEntity } from './entity/taxi.entity';
import { Taxi } from './dto/taxi.dto';

@Injectable()
export class TaxisService {
  constructor(
    @InjectRepository(TaxiEntity)
    private readonly taxisRepository: Repository<TaxiEntity>,
  ) {}

  public async getAll(countryId: string): Promise<Taxi[]> {
    return this.taxisRepository
      .createQueryBuilder('taxi')
      .innerJoin('taxi.countries', 'country')
      .where('country.id = :id', { id: countryId })
      .getMany();
  }
}
