import { BaseEntity } from 'src/base-entity';
import { StatusEnum } from 'src/enums/status.enum';
import {  Entity, Column } from 'typeorm';

@Entity('post')
export class Post extends BaseEntity {

    @Column({type: 'text', nullable: false})
    title: string;

    @Column({type: 'text', nullable: false})
    content: string;

    @Column({default: 0})
    upvotes: number;

    @Column({
        type: 'enum',
        enum: StatusEnum,
        default: StatusEnum.Suggestion
    })
    status: string;

}