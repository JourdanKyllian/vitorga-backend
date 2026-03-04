// entreprise.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { User } from '../../users/entities/user.entity'; 

@Entity('entreprise')
export class Entreprise {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100, nullable: true })
  type: string;

  @Column({ nullable: true })
  logo_url: string;

  @Column({ length: 14, nullable: true })
  siret: string;

  @Column({ type: 'text', nullable: true })
  adresse_siege: string;

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

 
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  owner: User; 

 
  @OneToMany(() => User, (user) => user.entreprise)
  employes: User[]; 
}