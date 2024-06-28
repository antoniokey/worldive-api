import { Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';

import { Taxi } from './dto/taxi.dto';
import { TaxisService } from './taxis.service';
import { GetTaxisArgs } from './taxis-args';

@Injectable()
export class TaxisResolver {
  constructor(private readonly taxisService: TaxisService) {}

  @Query((_returns) => [Taxi], {
    name: 'getTaxis',
  })
  public async getTaxis(@Args('input') input: GetTaxisArgs) {
    return this.taxisService.getAll(input);
  }
}
