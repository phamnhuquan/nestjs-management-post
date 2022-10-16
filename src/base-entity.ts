import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {

    //auto-increment
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({nullable:true})
    createdAt?: Date;
    
    @CreateDateColumn({nullable:true})
    updatedAt?: Date;
}