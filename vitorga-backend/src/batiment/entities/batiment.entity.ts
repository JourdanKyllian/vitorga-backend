import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  // OneToMany
} from 'typeorm';

import { Parcelle } from '../../parcelle/entities/parcelle.entity';
// import { Campagne } from './campagne.entity';
// import { BatimentRessource } from './batiment_ressource.entity';

@Entity('batiment')
export class Batiment {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  type_batiment: string;

  @Column('float', { nullable: true })
  capacite_stockage: number;

  @Column('float', { nullable: true })
  surface_m2: number;

  @UpdateDateColumn()
  updated_at: Date;

  
  
  // "Plusieurs Bâtiments peuvent être construits sur 1 Parcelle"
  @ManyToOne(() => Parcelle, (parcelle) => parcelle.batiments)
  @JoinColumn({ name: 'parcelle_id' }) // Crée la vraie colonne en base
  parcelle: Parcelle;

  

  /*
  // "1 Bâtiment peut accueillir Plusieurs Campagnes"
  @OneToMany(() => Campagne, (campagne) => campagne.batiment)
  campagnes: Campagne[];

  // "1 Bâtiment contient Plusieurs Ressources (via la table de jointure)"
  @OneToMany(() => BatimentRessource, (batimentRessource) => batimentRessource.batiment)
  ressources_stockees: BatimentRessource[];
  */
}