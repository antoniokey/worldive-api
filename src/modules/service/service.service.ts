import { Injectable } from '@nestjs/common';

import { GetServiceDataArgs } from './service-args';
import { TaxisService } from '../taxis/taxis.service';
import { RentalsService } from '../rentals/rentals.service';
import { ServiceType } from './service.enum';
import { ServiceData } from './dto/service.dto';

@Injectable()
export class ServiceService {
  constructor(
    private readonly taxisService: TaxisService,
    private readonly rentalsService: RentalsService,
  ) {}

  public async getAll(input: GetServiceDataArgs): Promise<ServiceData[]> {
    switch (input.serviceType) {
      case ServiceType.Taxi:
        return this.taxisService.getAll(input.countryId);
      case ServiceType.Renal:
        return this.rentalsService.getAll(input.countryId);
      default:
        return [];
    }
  }
}
