import { Args, Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';

import { Country } from './dto/country.dto';
import { CountriesService } from './countries.service';
import { GetCountriesArgs } from './countries-args';

@Injectable()
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @Query((_returns) => [Country], {
    name: 'getCountries',
  })
  public async getCountries(@Args('input') input: GetCountriesArgs) {
    return this.countriesService.getAll(input);
  }
}
