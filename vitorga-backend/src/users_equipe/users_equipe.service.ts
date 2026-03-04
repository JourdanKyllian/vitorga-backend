import { Injectable } from '@nestjs/common';
import { CreateUsersEquipeDto } from './dto/create-users_equipe.dto';
import { UpdateUsersEquipeDto } from './dto/update-users_equipe.dto';

@Injectable()
export class UsersEquipeService {
  create(createUsersEquipeDto: CreateUsersEquipeDto) {
    return 'This action adds a new usersEquipe';
  }

  findAll() {
    return `This action returns all usersEquipe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersEquipe`;
  }

  update(id: number, updateUsersEquipeDto: UpdateUsersEquipeDto) {
    return `This action updates a #${id} usersEquipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersEquipe`;
  }
}
