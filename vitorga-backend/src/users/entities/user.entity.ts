import {
  Entity,
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn
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

  @Column({ select: false }) // "select: false" cache le mot de passe par défaut dans les requêtes
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

  @DeleteDateColumn() // Gère le "soft delete" automatiquement
  deleted_at: Date;

  // Relation avec Role (Foreign Key)
  @Column()
  role_id: number;

  // Relation avec Entreprise (Foreign Key)
  @Column()
  entreprise_id: number;
}