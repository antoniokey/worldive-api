import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetTaxisArgs {
  @Field(() => String, { nullable: false })
  public countryId!: string;
}
