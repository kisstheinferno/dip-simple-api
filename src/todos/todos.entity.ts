import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('todo')
  export class TodoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    done: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  }
