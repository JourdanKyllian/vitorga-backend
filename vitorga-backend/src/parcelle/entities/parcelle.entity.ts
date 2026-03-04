import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany 
} from 'typeorm';

import { Vigne } from '../../vigne/entities/vigne.entity';
import { Batiment } from '../../batiment/entities/batiment.entity';

@Entity('parcelle')
export class Parcelle {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100, nullable: true })
  type_foncier: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'json', nullable: true })
  geometry: any;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;


  // 1. "1 Parcelle contient Plusieurs Vignes"
  @OneToMany(() => Vigne, (vigne) => vigne.parcelle)
  vignes: Vigne[];

  // 2. "1 Parcelle contient Plusieurs Bâtiments"
  @OneToMany(() => Batiment, (batiment) => batiment.parcelle)
  batiments: Batiment[];
}