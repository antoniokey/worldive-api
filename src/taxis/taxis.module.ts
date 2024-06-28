import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxiEntity } from './entity/taxi.entity';

import { TaxisResolver } from './taxis.resolver';
import { TaxisService } from './taxis.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaxiEntity])],
  providers: [TaxisResolver, TaxisService],
  exports: [TaxisResolver, TaxisService],
})
export class TaxisModule {}
