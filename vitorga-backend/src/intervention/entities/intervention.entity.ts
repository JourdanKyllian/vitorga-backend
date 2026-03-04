import { Equipe } from "src/equipe/entities/equipe.entity";
import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('interventions')
export class Intervention {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type_travail: string;

    @Column()
    statut: string;

    @Column()
    commentaire: string;

    @Column({ default: false })
    is_delete: boolean;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
    
    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(() => Equipe, (equipe) => equipe.interventions) 
    equipe: Equipe[];
}
