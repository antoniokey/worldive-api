import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ServiceData {
  @Field(() => String)
  public id!: string;

  @Field(() => String)
  public name!: string;

  @Field(() => Date)
  public created_at!: Date;

  @Field(() => Date)
  public updated_at!: Date;
}
