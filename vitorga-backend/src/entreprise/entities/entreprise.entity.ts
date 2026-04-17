import { User } from 'src/users/entities/user.entity';
import { OneToMany } from 'typeorm';

export class Entreprise {
  @OneToMany(() => User, (user) => user.entreprise)
  users: User[];
}
