import { PaginateInput } from '@app/common/dto/pagination.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaginateUserInput extends PaginateInput {}
