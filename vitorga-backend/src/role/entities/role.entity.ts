
import {
  Entity,
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn
} from 'typeorm';
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    name: string;
}
