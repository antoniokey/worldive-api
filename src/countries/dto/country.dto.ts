import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => Date)
  public created_at!: Date;

  @Field(() => Date)
  public updated_at!: Date;
}
