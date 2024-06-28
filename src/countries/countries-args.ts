import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetCountriesArgs {
  @Field(() => String, { nullable: true })
  public search?: string;
}
