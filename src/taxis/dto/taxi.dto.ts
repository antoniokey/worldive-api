import { Field, ObjectType } from '@nestjs/graphql';
import { Country } from '@src/countries/dto/country.dto';

@ObjectType()
export class Taxi {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  country_id: string;

  @Field(() => String)
  name!: string;

  @Field(() => Date)
  public created_at!: Date;

  @Field(() => Date)
  public updated_at!: Date;

  public country: Country;
}
