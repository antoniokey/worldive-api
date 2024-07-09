import { Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';

import { ServiceService } from './service.service';
import { GetServiceDataArgs } from './service-args';
import { ServiceData } from './dto/service.dto';

@Injectable()
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Query(() => [ServiceData], {
    name: 'getServiceData',
  })
  public async getServiceData(@Args('input') input: GetServiceDataArgs) {
    return this.serviceService.getAll(input);
  }
}
