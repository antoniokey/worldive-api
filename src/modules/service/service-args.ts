import { Field, InputType } from '@nestjs/graphql';

import { ServiceType } from './service.enum';

@InputType()
export class GetServiceDataArgs {
  @Field(() => String, { nullable: false })
  public countryId!: string;

  @Field({ nullable: false })
  public serviceType!: ServiceType;
}
