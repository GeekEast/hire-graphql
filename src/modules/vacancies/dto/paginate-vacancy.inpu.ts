import { PaginateInput } from '@app/common/dto/pagination.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaginateVacancyInput extends PaginateInput {}
