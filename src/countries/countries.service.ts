import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CountryEntity } from './entity/country.entity';
import { GetCountriesArgs } from './countries-args';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countriesRepository: Repository<CountryEntity>,
  ) {}

  public async getAll(input: GetCountriesArgs): Promise<any[]> {
    return this.countriesRepository
      .createQueryBuilder('country')
      .where('country.name like :name', { name: input.search ? `%${input.search}%` : null })
      .getMany();
  }
}
