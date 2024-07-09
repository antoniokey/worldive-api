import { Module } from '@nestjs/common';

import { TaxisModule } from '../taxis/taxis.module';
import { ServiceService } from './service.service';
import { ServiceResolver } from './service.resolver';
import { RentalsModule } from '../rentals/rentals.module';

@Module({
  imports: [TaxisModule, RentalsModule],
  providers: [ServiceResolver, ServiceService],
  exports: [ServiceResolver, ServiceService],
})
export class ServiceModule {}
