import { Intervention } from "src/intervention/entities/intervention.entity";
import { 
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('campagne')
export class Campagne {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date_ouverture: Date;

    @Column()
    date_cloture: Date;

    @Column({ default: true })
    is_active: boolean;
        
    @CreateDateColumn()
    created_at: Date;
      
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Intervention, (intervention) => intervention.campagne)
    interventions: Intervention;
}
