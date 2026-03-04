import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import { Role } from 'src/role/entities/role.entity';
import { UsersEquipe } from 'src/users_equipe/entities/users_equipe.entity';
import {
  Entity,
  PrimaryGeneratedColumn, 
  Column,
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstname: string;

  @Column({ length: 100 })
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  profile_picture: string;

  @Column({ nullable: true })
  token_auth: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_delete: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Entreprise, (entreprise) => entreprise.users)
  @JoinColumn({ name: 'entreprise_id' })
  @Column()
  entreprise: Entreprise;

  @OneToMany(() => UsersEquipe, (usersEquipe) => usersEquipe.user)
  usersEquipes: UsersEquipe[];
}