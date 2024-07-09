import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RentalsService } from './rentals.service';
import { RentalEntity } from './entity/rental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentalEntity])],
  providers: [RentalsService],
  exports: [RentalsService],
})
export class RentalsModule {}
