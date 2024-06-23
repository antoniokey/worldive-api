import { Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';

import { Country } from './dto/country.dto';
import { CountriesService } from './countries.service';

@Injectable()
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @Query((_returns) => [Country], {
    name: 'countries',
  })
  async countries() {
    return this.countriesService.getAll();
  }
}
