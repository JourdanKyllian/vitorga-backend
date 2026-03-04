import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersEquipeDto } from './create-users_equipe.dto';

export class UpdateUsersEquipeDto extends PartialType(CreateUsersEquipeDto) {}
