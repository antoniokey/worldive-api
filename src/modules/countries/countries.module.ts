import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountriesResolver } from './countries.resolver';
import { CountriesService } from './countries.service';
import { CountryEntity } from './entity/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountriesResolver, CountriesService],
  exports: [CountriesResolver, CountriesService],
})
export class CountriesModule {}
