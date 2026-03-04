// src/users_equipe/entities/users_equipe.entity.ts
import { 
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
    PrimaryColumn
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Equipe } from '../../equipe/entities/equipe.entity';

@Entity('users_equipe')
export class UsersEquipe {
  @Column()
  equipe_name: string;

  @ManyToOne(() => User, (user) => user.usersEquipes)
  @JoinColumn({ name: 'users_id' })
  @PrimaryColumn()
  user: User;

  @ManyToOne(() => Equipe, (equipe) => equipe.usersEquipes)
  @JoinColumn({ name: 'equipe_id' })
  @PrimaryColumn()
  equipe: Equipe;
}