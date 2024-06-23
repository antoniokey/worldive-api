import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from './entity/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countriesRepository: Repository<CountryEntity>,
  ) {}

  public async getAll(): Promise<any[]> {
    return this.countriesRepository.find();
  }
}
