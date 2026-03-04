import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Parcelle } from '../../parcelle/entities/parcelle.entity';

@Entity('vigne')
export class Vigne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  cepage: string;

  @Column()
  annee_plantation: number;

  @Column('float')
  densite: number;

  @Column({ length: 100 })
  exposition: string;

  @Column('float')
  surface_ha: number;

  @UpdateDateColumn()
  updated_at: Date;

  
  
  // "Plusieurs Vignes sont plantées sur 1 Parcelle"
  @ManyToOne(() => Parcelle, (parcelle) => parcelle.vignes)
  @JoinColumn({ name: 'parcelle_id' }) // Crée la colonne "#parcelle_id" de ton schéma
  parcelle: Parcelle;

  // Tu auras aussi tes autres @ManyToOne ici plus tard pour :
  // - appellation_id
  // - normes_id
  // - type_production_id
}