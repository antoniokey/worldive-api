import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RentalEntity } from './entity/rental.entity';
import { Rental } from './dto/rental.dto';

@Injectable()
export class RentalsService {
  constructor(
    @InjectRepository(RentalEntity)
    private readonly rentalRepository: Repository<RentalEntity>,
  ) {}

  public async getAll(countryId: string): Promise<Rental[]> {
    return this.rentalRepository
      .createQueryBuilder('rental')
      .innerJoin('rental.countries', 'country')
      .where('country.id = :id', { id: countryId })
      .getMany();
  }
}
