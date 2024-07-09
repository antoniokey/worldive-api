import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { TaxiEntity } from '@src/modules/taxis/entity/taxi.entity';
import { RentalEntity } from '@src/modules/rentals/entity/rental.entity';

@Entity({ name: 'country' })
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar' })
  public name!: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at!: Date;

  @ManyToMany(() => TaxiEntity, (taxi) => taxi.countries)
  @JoinTable({
    name: 'country_taxi',
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'taxi_id',
      referencedColumnName: 'id',
    },
  })
  public taxis!: TaxiEntity[];

  @ManyToMany(() => RentalEntity, (rental) => rental.countries)
  @JoinTable({
    name: 'country_rental',
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'rental_id',
      referencedColumnName: 'id',
    },
  })
  public rentals!: RentalEntity[];
}
