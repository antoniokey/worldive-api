import { CountryEntity } from '@src/countries/entity/country.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'country_taxi' })
export class TaxiEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne((_type) => CountryEntity, (country) => country.id, {
    onDelete: 'CASCADE',
    persistence: false,
  })
  @JoinColumn({ name: 'country_id' })
  public country!: CountryEntity;

  @Column({ name: 'country_id' })
  public countryId!: string;

  @Column({ type: 'varchar' })
  name!: string;

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
}
