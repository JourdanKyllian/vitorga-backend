import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersEquipeService } from './users_equipe.service';
import { CreateUsersEquipeDto } from './dto/create-users_equipe.dto';
import { UpdateUsersEquipeDto } from './dto/update-users_equipe.dto';

@Controller('users-equipe')
export class UsersEquipeController {
  constructor(private readonly usersEquipeService: UsersEquipeService) {}

  @Post()
  create(@Body() createUsersEquipeDto: CreateUsersEquipeDto) {
    return this.usersEquipeService.create(createUsersEquipeDto);
  }

  @Get()
  findAll() {
    return this.usersEquipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersEquipeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersEquipeDto: UpdateUsersEquipeDto) {
    return this.usersEquipeService.update(+id, updateUsersEquipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersEquipeService.remove(+id);
  }
}
