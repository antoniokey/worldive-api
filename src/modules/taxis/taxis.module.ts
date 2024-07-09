import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxiEntity } from './entity/taxi.entity';

import { TaxisService } from './taxis.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaxiEntity])],
  providers: [TaxisService],
  exports: [TaxisService],
})
export class TaxisModule {}
