import { Intervention } from "src/intervention/entities/intervention.entity";
import { UsersEquipe } from "src/users_equipe/entities/users_equipe.entity";
import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
} from "typeorm";

@Entity('equipe')
export class Equipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surface_attribuee: number;

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

    @Column()
    role_id: number;

    @OneToMany(() => UsersEquipe, (usersEquipe) => usersEquipe.user)
    usersEquipes: UsersEquipe[];

    @ManyToOne(() => Intervention, (intervention) => intervention.equipe)
    interventions: Intervention;
}
